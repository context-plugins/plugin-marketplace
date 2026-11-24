from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.file_manager_files400_error1 import FileManagerFiles400Error1

ListFileManagerFilesErrorBody: TypeAlias = FileManagerFiles400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _ListFileManagerFilesError:
    def map(self, status_code: int, content: bytes) -> ListFileManagerFilesErrorBody:
        match status_code:
            case 400:
                return decode_json[FileManagerFiles400Error1](content)
            case _:
                return RawError(status_code, content)


list_file_manager_files_error_mapper: Final[ErrorMapper[ListFileManagerFilesErrorBody]] = _ListFileManagerFilesError()
