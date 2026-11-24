from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.o_auth_error import OAuthError

RevokeErrorBody: TypeAlias = OAuthError | RawError


@dataclass(frozen=True, slots=True)
class _RevokeError:
    def map(self, status_code: int, content: bytes) -> RevokeErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[OAuthError](content)
            case _:
                return RawError(status_code, content)


revoke_error_mapper: Final[ErrorMapper[RevokeErrorBody]] = _RevokeError()
