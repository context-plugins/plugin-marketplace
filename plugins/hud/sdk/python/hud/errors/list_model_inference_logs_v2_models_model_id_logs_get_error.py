from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListModelInferenceLogsV2ModelsModelIdLogsGetError:
    def map(self, status_code: int, content: bytes) -> ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_model_inference_logs_v2_models_model_id_logs_get_error_mapper: Final[
    ErrorMapper[ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody]
] = _ListModelInferenceLogsV2ModelsModelIdLogsGetError()
