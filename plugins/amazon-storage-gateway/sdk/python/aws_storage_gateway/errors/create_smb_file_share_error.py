from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateSmbFileShareErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateSmbFileShareError:
    def map(self, status_code: int, content: bytes) -> CreateSmbFileShareErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_smb_file_share_error_mapper: Final[ErrorMapper[CreateSmbFileShareErrorBody]] = _CreateSmbFileShareError()
