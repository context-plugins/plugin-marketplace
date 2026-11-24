from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateMemberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateMemberError:
    def map(self, status_code: int, content: bytes) -> UpdateMemberErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_member_error_mapper: Final[ErrorMapper[UpdateMemberErrorBody]] = _UpdateMemberError()
