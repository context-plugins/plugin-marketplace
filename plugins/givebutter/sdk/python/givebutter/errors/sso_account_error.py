from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_exception1 import AuthenticationException1

SsoAccountErrorBody: TypeAlias = AuthenticationException1 | RawError


@dataclass(frozen=True, slots=True)
class _SsoAccountError:
    def map(self, status_code: int, content: bytes) -> SsoAccountErrorBody:
        match status_code:
            case 401:
                return decode_json[AuthenticationException1](content)
            case _:
                return RawError(status_code, content)


sso_account_error_mapper: Final[ErrorMapper[SsoAccountErrorBody]] = _SsoAccountError()
