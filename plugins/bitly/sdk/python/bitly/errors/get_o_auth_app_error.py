from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetOAuthAppErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetOAuthAppError:
    def map(self, status_code: int, content: bytes) -> GetOAuthAppErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_o_auth_app_error_mapper: Final[ErrorMapper[GetOAuthAppErrorBody]] = _GetOAuthAppError()
