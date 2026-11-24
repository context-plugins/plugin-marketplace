from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse

GetProfitAndLossChargesErrorBody: TypeAlias = ApiGatewayErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetProfitAndLossChargesError:
    def map(self, status_code: int, content: bytes) -> GetProfitAndLossChargesErrorBody:
        match status_code:
            case 400 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_profit_and_loss_charges_error_mapper: Final[
    ErrorMapper[GetProfitAndLossChargesErrorBody]
] = _GetProfitAndLossChargesError()
