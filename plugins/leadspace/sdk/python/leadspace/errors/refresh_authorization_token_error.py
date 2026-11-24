from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RefreshAuthorizationTokenErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RefreshAuthorizationTokenError:
    def map(self, status_code: int, content: bytes) -> RefreshAuthorizationTokenErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


refresh_authorization_token_error_mapper: Final[
    ErrorMapper[RefreshAuthorizationTokenErrorBody]
] = _RefreshAuthorizationTokenError()
