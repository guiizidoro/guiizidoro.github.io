import os

directory = 'C:/Users/user/Desktop/Blog/imagens/produtos/veccon_paulinia'

files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

files.sort()

for index, filename in enumerate(files, start=1):
    _, ext = os.path.splitext(filename)
    new_name = f"image_{index:02d}_vecconpaulinia{ext}"
    old_path = os.path.join(directory, filename)
    new_path = os.path.join(directory, new_name)
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")
