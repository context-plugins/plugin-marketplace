from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetTasksetByNameV2TasksetsByNameNameGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetTasksetByNameV2TasksetsByNameNameGetError:
    def map(self, status_code: int, content: bytes) -> GetTasksetByNameV2TasksetsByNameNameGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_taskset_by_name_v2_tasksets_by_name_name_get_error_mapper: Final[
    ErrorMapper[GetTasksetByNameV2TasksetsByNameNameGetErrorBody]
] = _GetTasksetByNameV2TasksetsByNameNameGetError()
