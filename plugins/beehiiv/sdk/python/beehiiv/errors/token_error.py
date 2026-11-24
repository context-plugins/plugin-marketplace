from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.o_auth_error import OAuthError

TokenErrorBody: TypeAlias = OAuthError | RawError


@dataclass(frozen=True, slots=True)
class _TokenError:
    def map(self, status_code: int, content: bytes) -> TokenErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[OAuthError](content)
            case _:
                return RawError(status_code, content)


token_error_mapper: Final[ErrorMapper[TokenErrorBody]] = _TokenError()
