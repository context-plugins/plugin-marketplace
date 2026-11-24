from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteLockFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteLockFileError:
    def map(self, status_code: int, content: bytes) -> DeleteLockFileErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_lock_file_error_mapper: Final[ErrorMapper[DeleteLockFileErrorBody]] = _DeleteLockFileError()
