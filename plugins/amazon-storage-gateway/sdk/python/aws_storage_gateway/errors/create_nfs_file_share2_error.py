from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateNfsFileShare2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateNfsFileShare2Error:
    def map(self, status_code: int, content: bytes) -> CreateNfsFileShare2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_nfs_file_share2_error_mapper: Final[ErrorMapper[CreateNfsFileShare2ErrorBody]] = _CreateNfsFileShare2Error()
