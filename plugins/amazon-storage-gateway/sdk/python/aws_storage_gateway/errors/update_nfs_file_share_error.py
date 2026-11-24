from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateNfsFileShareErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateNfsFileShareError:
    def map(self, status_code: int, content: bytes) -> UpdateNfsFileShareErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_nfs_file_share_error_mapper: Final[ErrorMapper[UpdateNfsFileShareErrorBody]] = _UpdateNfsFileShareError()
