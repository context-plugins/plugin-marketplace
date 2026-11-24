from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.file_manager_file400_error1 import FileManagerFile400Error1

DeleteAFileManagerFileErrorBody: TypeAlias = FileManagerFile400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAFileManagerFileError:
    def map(self, status_code: int, content: bytes) -> DeleteAFileManagerFileErrorBody:
        match status_code:
            case 400:
                return decode_json[FileManagerFile400Error1](content)
            case _:
                return RawError(status_code, content)


delete_a_file_manager_file_error_mapper: Final[
    ErrorMapper[DeleteAFileManagerFileErrorBody]
] = _DeleteAFileManagerFileError()
