from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetVehicleSellerReserveErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetVehicleSellerReserveError:
    def map(self, status_code: int, content: bytes) -> GetVehicleSellerReserveErrorBody:
        match status_code:
            case 401 | 429:
                return RawError(status_code, content)
            case 404:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_vehicle_seller_reserve_error_mapper: Final[
    ErrorMapper[GetVehicleSellerReserveErrorBody]
] = _GetVehicleSellerReserveError()
