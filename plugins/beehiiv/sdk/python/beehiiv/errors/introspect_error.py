from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.o_auth_error import OAuthError

IntrospectErrorBody: TypeAlias = OAuthError | RawError


@dataclass(frozen=True, slots=True)
class _IntrospectError:
    def map(self, status_code: int, content: bytes) -> IntrospectErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[OAuthError](content)
            case _:
                return RawError(status_code, content)


introspect_error_mapper: Final[ErrorMapper[IntrospectErrorBody]] = _IntrospectError()
