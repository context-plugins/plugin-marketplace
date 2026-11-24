from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetInferenceUsageV2InferenceUsageGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetInferenceUsageV2InferenceUsageGetError:
    def map(self, status_code: int, content: bytes) -> GetInferenceUsageV2InferenceUsageGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_inference_usage_v2_inference_usage_get_error_mapper: Final[
    ErrorMapper[GetInferenceUsageV2InferenceUsageGetErrorBody]
] = _GetInferenceUsageV2InferenceUsageGetError()
