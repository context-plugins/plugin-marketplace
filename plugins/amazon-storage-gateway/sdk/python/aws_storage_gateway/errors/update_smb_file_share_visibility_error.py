from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateSmbFileShareVisibilityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateSmbFileShareVisibilityError:
    def map(self, status_code: int, content: bytes) -> UpdateSmbFileShareVisibilityErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_smb_file_share_visibility_error_mapper: Final[
    ErrorMapper[UpdateSmbFileShareVisibilityErrorBody]
] = _UpdateSmbFileShareVisibilityError()
