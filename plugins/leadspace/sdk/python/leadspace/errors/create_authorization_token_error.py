from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateAuthorizationTokenErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateAuthorizationTokenError:
    def map(self, status_code: int, content: bytes) -> CreateAuthorizationTokenErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_authorization_token_error_mapper: Final[
    ErrorMapper[CreateAuthorizationTokenErrorBody]
] = _CreateAuthorizationTokenError()
