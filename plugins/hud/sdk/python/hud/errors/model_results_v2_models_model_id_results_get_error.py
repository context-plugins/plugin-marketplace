from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ModelResultsV2ModelsModelIdResultsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ModelResultsV2ModelsModelIdResultsGetError:
    def map(self, status_code: int, content: bytes) -> ModelResultsV2ModelsModelIdResultsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


model_results_v2_models_model_id_results_get_error_mapper: Final[
    ErrorMapper[ModelResultsV2ModelsModelIdResultsGetErrorBody]
] = _ModelResultsV2ModelsModelIdResultsGetError()
