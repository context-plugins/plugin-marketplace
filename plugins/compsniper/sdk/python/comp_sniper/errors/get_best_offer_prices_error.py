from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetBestOfferPricesErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetBestOfferPricesError:
    def map(self, status_code: int, content: bytes) -> GetBestOfferPricesErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_best_offer_prices_error_mapper: Final[ErrorMapper[GetBestOfferPricesErrorBody]] = _GetBestOfferPricesError()
