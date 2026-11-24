from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetAuctionToPortShippingErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetAuctionToPortShippingError:
    def map(self, status_code: int, content: bytes) -> GetAuctionToPortShippingErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return RawError(status_code, content)
            case 403 | 404 | 422 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_auction_to_port_shipping_error_mapper: Final[
    ErrorMapper[GetAuctionToPortShippingErrorBody]
] = _GetAuctionToPortShippingError()
