from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse
from ..models.o_auth_client_exception import OAuthClientException

LogoutErrorBody: TypeAlias = ApiGatewayErrorResponse | OAuthClientException | RawError


@dataclass(frozen=True, slots=True)
class _LogoutError:
    def map(self, status_code: int, content: bytes) -> LogoutErrorBody:
        match status_code:
            case 400 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case 401:
                return decode_json[OAuthClientException](content)
            case _:
                return RawError(status_code, content)


logout_error_mapper: Final[ErrorMapper[LogoutErrorBody]] = _LogoutError()
