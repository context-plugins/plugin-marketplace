from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_developers_estimates401_error1 import IosDevelopersEstimates401Error1

GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody: TypeAlias = (
    IosDevelopersEstimates401Error1 | str | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetAppsEstimatesIosDevelopersIdEstimatesGetError:
    def map(self, status_code: int, content: bytes) -> GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosDevelopersEstimates401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_apps_estimates_ios_developers_id_estimates_get_error_mapper: Final[
    ErrorMapper[GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody]
] = _GetAppsEstimatesIosDevelopersIdEstimatesGetError()
