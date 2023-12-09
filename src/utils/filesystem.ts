import * as fs from 'fs/promises';

export function doesFileExist(path: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    fs.access(path, fs.constants.F_OK)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
}
