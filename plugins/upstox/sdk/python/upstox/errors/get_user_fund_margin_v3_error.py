from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse

GetUserFundMarginV3ErrorBody: TypeAlias = ApiGatewayErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetUserFundMarginV3Error:
    def map(self, status_code: int, content: bytes) -> GetUserFundMarginV3ErrorBody:
        match status_code:
            case 400 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_user_fund_margin_v3_error_mapper: Final[ErrorMapper[GetUserFundMarginV3ErrorBody]] = _GetUserFundMarginV3Error()
