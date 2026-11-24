from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

PostAppCenterApiV2JwtTokenErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _PostAppCenterApiV2JwtTokenError:
    def map(self, status_code: int, content: bytes) -> PostAppCenterApiV2JwtTokenErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_app_center_api_v2_jwt_token_error_mapper: Final[
    ErrorMapper[PostAppCenterApiV2JwtTokenErrorBody]
] = _PostAppCenterApiV2JwtTokenError()
