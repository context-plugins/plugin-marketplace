from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_estimates401_error1 import IosEstimates401Error1

GetAppsEstimatesIosEstimatesGetErrorBody: TypeAlias = IosEstimates401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetAppsEstimatesIosEstimatesGetError:
    def map(self, status_code: int, content: bytes) -> GetAppsEstimatesIosEstimatesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosEstimates401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_apps_estimates_ios_estimates_get_error_mapper: Final[
    ErrorMapper[GetAppsEstimatesIosEstimatesGetErrorBody]
] = _GetAppsEstimatesIosEstimatesGetError()
