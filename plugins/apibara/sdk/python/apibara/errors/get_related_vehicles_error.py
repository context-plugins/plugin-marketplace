from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetRelatedVehiclesErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetRelatedVehiclesError:
    def map(self, status_code: int, content: bytes) -> GetRelatedVehiclesErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return RawError(status_code, content)
            case 403 | 404 | 422 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_related_vehicles_error_mapper: Final[ErrorMapper[GetRelatedVehiclesErrorBody]] = _GetRelatedVehiclesError()
