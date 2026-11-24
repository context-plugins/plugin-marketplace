from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse

InitTokenRequestForIndieUserErrorBody: TypeAlias = ApiGatewayErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _InitTokenRequestForIndieUserError:
    def map(self, status_code: int, content: bytes) -> InitTokenRequestForIndieUserErrorBody:
        match status_code:
            case 400 | 401 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case _:
                return RawError(status_code, content)


init_token_request_for_indie_user_error_mapper: Final[
    ErrorMapper[InitTokenRequestForIndieUserErrorBody]
] = _InitTokenRequestForIndieUserError()
