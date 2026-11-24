from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetInferenceUsageAggregateV2UsageInferenceGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetInferenceUsageAggregateV2UsageInferenceGetError:
    def map(self, status_code: int, content: bytes) -> GetInferenceUsageAggregateV2UsageInferenceGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_inference_usage_aggregate_v2_usage_inference_get_error_mapper: Final[
    ErrorMapper[GetInferenceUsageAggregateV2UsageInferenceGetErrorBody]
] = _GetInferenceUsageAggregateV2UsageInferenceGetError()
