from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError:
    def map(self, status_code: int, content: bytes) -> GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error_mapper: Final[
    ErrorMapper[GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody]
] = _GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError()
