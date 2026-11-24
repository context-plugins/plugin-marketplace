from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetShippingRateUsageErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetShippingRateUsageError:
    def map(self, status_code: int, content: bytes) -> GetShippingRateUsageErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_shipping_rate_usage_error_mapper: Final[ErrorMapper[GetShippingRateUsageErrorBody]] = _GetShippingRateUsageError()
