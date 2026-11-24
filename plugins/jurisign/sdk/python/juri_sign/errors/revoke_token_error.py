from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

RevokeTokenErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _RevokeTokenError:
    def map(self, status_code: int, content: bytes) -> RevokeTokenErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


revoke_token_error_mapper: Final[ErrorMapper[RevokeTokenErrorBody]] = _RevokeTokenError()
