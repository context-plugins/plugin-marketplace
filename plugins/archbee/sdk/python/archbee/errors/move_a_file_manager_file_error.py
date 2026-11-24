from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.file_manager_move400_error1 import FileManagerMove400Error1

MoveAFileManagerFileErrorBody: TypeAlias = FileManagerMove400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _MoveAFileManagerFileError:
    def map(self, status_code: int, content: bytes) -> MoveAFileManagerFileErrorBody:
        match status_code:
            case 400:
                return decode_json[FileManagerMove400Error1](content)
            case _:
                return RawError(status_code, content)


move_a_file_manager_file_error_mapper: Final[ErrorMapper[MoveAFileManagerFileErrorBody]] = _MoveAFileManagerFileError()
