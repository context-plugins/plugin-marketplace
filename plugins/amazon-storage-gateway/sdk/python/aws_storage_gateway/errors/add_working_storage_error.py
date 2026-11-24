from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddWorkingStorageErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddWorkingStorageError:
    def map(self, status_code: int, content: bytes) -> AddWorkingStorageErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_working_storage_error_mapper: Final[ErrorMapper[AddWorkingStorageErrorBody]] = _AddWorkingStorageError()
