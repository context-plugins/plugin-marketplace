from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.o_auth_error import OAuthError

TokenInfoErrorBody: TypeAlias = OAuthError | RawError


@dataclass(frozen=True, slots=True)
class _TokenInfoError:
    def map(self, status_code: int, content: bytes) -> TokenInfoErrorBody:
        match status_code:
            case 401:
                return decode_json[OAuthError](content)
            case _:
                return RawError(status_code, content)


token_info_error_mapper: Final[ErrorMapper[TokenInfoErrorBody]] = _TokenInfoError()
