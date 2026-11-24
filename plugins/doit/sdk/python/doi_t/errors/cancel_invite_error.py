from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelInviteErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelInviteError:
    def map(self, status_code: int, content: bytes) -> CancelInviteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_invite_error_mapper: Final[ErrorMapper[CancelInviteErrorBody]] = _CancelInviteError()
