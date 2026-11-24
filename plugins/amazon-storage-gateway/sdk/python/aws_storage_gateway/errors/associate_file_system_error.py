from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateFileSystemErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateFileSystemError:
    def map(self, status_code: int, content: bytes) -> AssociateFileSystemErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_file_system_error_mapper: Final[ErrorMapper[AssociateFileSystemErrorBody]] = _AssociateFileSystemError()
