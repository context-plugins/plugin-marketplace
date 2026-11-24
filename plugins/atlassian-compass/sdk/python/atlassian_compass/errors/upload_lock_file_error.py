from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UploadLockFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UploadLockFileError:
    def map(self, status_code: int, content: bytes) -> UploadLockFileErrorBody:
        match status_code:
            case 400 | 403 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


upload_lock_file_error_mapper: Final[ErrorMapper[UploadLockFileErrorBody]] = _UploadLockFileError()
