from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse

PlaceOrder1ErrorBody: TypeAlias = ApiGatewayErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PlaceOrder1Error:
    def map(self, status_code: int, content: bytes) -> PlaceOrder1ErrorBody:
        match status_code:
            case 400 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case _:
                return RawError(status_code, content)


place_order1_error_mapper: Final[ErrorMapper[PlaceOrder1ErrorBody]] = _PlaceOrder1Error()
