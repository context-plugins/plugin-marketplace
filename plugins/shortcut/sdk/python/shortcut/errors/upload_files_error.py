from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UploadFilesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UploadFilesError:
    def map(self, status_code: int, content: bytes) -> UploadFilesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


upload_files_error_mapper: Final[ErrorMapper[UploadFilesErrorBody]] = _UploadFilesError()
