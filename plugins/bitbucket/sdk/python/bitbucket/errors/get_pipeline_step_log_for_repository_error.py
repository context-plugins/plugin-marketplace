from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetPipelineStepLogForRepositoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineStepLogForRepositoryError:
    def map(self, status_code: int, content: bytes) -> GetPipelineStepLogForRepositoryErrorBody:
        match status_code:
            case 404 | 416:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_pipeline_step_log_for_repository_error_mapper: Final[
    ErrorMapper[GetPipelineStepLogForRepositoryErrorBody]
] = _GetPipelineStepLogForRepositoryError()
