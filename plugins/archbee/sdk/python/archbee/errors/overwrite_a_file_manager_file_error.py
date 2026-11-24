from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.file_manager_replace400_error1 import FileManagerReplace400Error1

OverwriteAFileManagerFileErrorBody: TypeAlias = FileManagerReplace400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _OverwriteAFileManagerFileError:
    def map(self, status_code: int, content: bytes) -> OverwriteAFileManagerFileErrorBody:
        match status_code:
            case 400:
                return decode_json[FileManagerReplace400Error1](content)
            case _:
                return RawError(status_code, content)


overwrite_a_file_manager_file_error_mapper: Final[
    ErrorMapper[OverwriteAFileManagerFileErrorBody]
] = _OverwriteAFileManagerFileError()
