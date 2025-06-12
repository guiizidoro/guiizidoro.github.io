import os
from PIL import Image

# === CONFIGURATIONS ===
input_folder = "C:/Users/user/Desktop/Blog/sou_pleno_visage"  # Folder to test
output_base = "C:/Users/user/Documents/otimizada"                  # Output root
quality = 65                                        # Lower = smaller file

# === FILE FORMATS SUPPORTED ===
valid_exts = [".jpg", ".jpeg", ".png", ".webp"]

def optimize_image(input_path, output_path):
    try:
        img = Image.open(input_path)

        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        img.save(output_path, optimize=True, quality=quality)

        print(f"✅ Optimized: {output_path}")
    except Exception as e:
        print(f"❌ Error optimizing {input_path}: {e}")

for file in os.listdir(input_folder):
    if any(file.lower().endswith(ext) for ext in valid_exts):
        input_path = os.path.join(input_folder, file)
        
        # Build relative path and final output path
        rel_path = os.path.relpath(input_path, "imagens")
        output_path = os.path.join(output_base, rel_path)

        optimize_image(input_path, output_path)
