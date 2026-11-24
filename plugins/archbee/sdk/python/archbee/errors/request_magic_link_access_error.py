from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_control_request400_error1 import AccessControlRequest400Error1

RequestMagicLinkAccessErrorBody: TypeAlias = AccessControlRequest400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _RequestMagicLinkAccessError:
    def map(self, status_code: int, content: bytes) -> RequestMagicLinkAccessErrorBody:
        match status_code:
            case 400:
                return decode_json[AccessControlRequest400Error1](content)
            case _:
                return RawError(status_code, content)


request_magic_link_access_error_mapper: Final[
    ErrorMapper[RequestMagicLinkAccessErrorBody]
] = _RequestMagicLinkAccessError()
