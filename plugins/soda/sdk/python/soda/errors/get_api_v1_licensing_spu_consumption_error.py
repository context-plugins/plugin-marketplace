from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetApiV1LicensingSpuConsumptionErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1LicensingSpuConsumptionError:
    def map(self, status_code: int, content: bytes) -> GetApiV1LicensingSpuConsumptionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_api_v1_licensing_spu_consumption_error_mapper: Final[
    ErrorMapper[GetApiV1LicensingSpuConsumptionErrorBody]
] = _GetApiV1LicensingSpuConsumptionError()
