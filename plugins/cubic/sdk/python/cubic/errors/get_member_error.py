from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetMemberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetMemberError:
    def map(self, status_code: int, content: bytes) -> GetMemberErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_member_error_mapper: Final[ErrorMapper[GetMemberErrorBody]] = _GetMemberError()
