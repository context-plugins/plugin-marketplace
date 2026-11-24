from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetTasksetV2TasksetsTasksetIdGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetTasksetV2TasksetsTasksetIdGetError:
    def map(self, status_code: int, content: bytes) -> GetTasksetV2TasksetsTasksetIdGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_taskset_v2_tasksets_taskset_id_get_error_mapper: Final[
    ErrorMapper[GetTasksetV2TasksetsTasksetIdGetErrorBody]
] = _GetTasksetV2TasksetsTasksetIdGetError()
