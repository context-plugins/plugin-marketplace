from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCurrentMemberInfoErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCurrentMemberInfoError:
    def map(self, status_code: int, content: bytes) -> GetCurrentMemberInfoErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_current_member_info_error_mapper: Final[ErrorMapper[GetCurrentMemberInfoErrorBody]] = _GetCurrentMemberInfoError()
