from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

InviteUserErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _InviteUserError:
    def map(self, status_code: int, content: bytes) -> InviteUserErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


invite_user_error_mapper: Final[ErrorMapper[InviteUserErrorBody]] = _InviteUserError()
