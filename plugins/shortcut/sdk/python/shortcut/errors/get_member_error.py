from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetMemberErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetMemberError:
    def map(self, status_code: int, content: bytes) -> GetMemberErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_member_error_mapper: Final[ErrorMapper[GetMemberErrorBody]] = _GetMemberError()
