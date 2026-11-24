from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteFileShareErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteFileShareError:
    def map(self, status_code: int, content: bytes) -> DeleteFileShareErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_file_share_error_mapper: Final[ErrorMapper[DeleteFileShareErrorBody]] = _DeleteFileShareError()
