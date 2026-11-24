from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateSmbLocalGroupsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateSmbLocalGroupsError:
    def map(self, status_code: int, content: bytes) -> UpdateSmbLocalGroupsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_smb_local_groups_error_mapper: Final[ErrorMapper[UpdateSmbLocalGroupsErrorBody]] = _UpdateSmbLocalGroupsError()
