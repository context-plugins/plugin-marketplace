from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.usage_limit_error import UsageLimitError

GetVehicleImagesErrorBody: TypeAlias = Error | UsageLimitError | RawError


@dataclass(frozen=True, slots=True)
class _GetVehicleImagesError:
    def map(self, status_code: int, content: bytes) -> GetVehicleImagesErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[UsageLimitError](content)
            case _:
                return RawError(status_code, content)


get_vehicle_images_error_mapper: Final[ErrorMapper[GetVehicleImagesErrorBody]] = _GetVehicleImagesError()
