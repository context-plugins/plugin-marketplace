from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UnpublishTraceV2TraceTraceIdPublishDeleteError:
    def map(self, status_code: int, content: bytes) -> UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


unpublish_trace_v2_trace_trace_id_publish_delete_error_mapper: Final[
    ErrorMapper[UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody]
] = _UnpublishTraceV2TraceTraceIdPublishDeleteError()
