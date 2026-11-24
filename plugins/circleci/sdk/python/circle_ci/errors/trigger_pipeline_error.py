from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TriggerPipelineErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TriggerPipelineError:
    def map(self, status_code: int, content: bytes) -> TriggerPipelineErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


trigger_pipeline_error_mapper: Final[ErrorMapper[TriggerPipelineErrorBody]] = _TriggerPipelineError()
