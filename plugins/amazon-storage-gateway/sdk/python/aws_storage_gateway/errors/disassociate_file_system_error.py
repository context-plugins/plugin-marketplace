from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisassociateFileSystemErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisassociateFileSystemError:
    def map(self, status_code: int, content: bytes) -> DisassociateFileSystemErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disassociate_file_system_error_mapper: Final[
    ErrorMapper[DisassociateFileSystemErrorBody]
] = _DisassociateFileSystemError()
