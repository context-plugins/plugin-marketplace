from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetShippingRatesErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetShippingRatesError:
    def map(self, status_code: int, content: bytes) -> GetShippingRatesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 413 | 422 | 429 | 502 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_shipping_rates_error_mapper: Final[ErrorMapper[GetShippingRatesErrorBody]] = _GetShippingRatesError()
