from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

StopPipelineErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _StopPipelineError:
    def map(self, status_code: int, content: bytes) -> StopPipelineErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


stop_pipeline_error_mapper: Final[ErrorMapper[StopPipelineErrorBody]] = _StopPipelineError()
