from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateRepositoryPipelineScheduleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateRepositoryPipelineScheduleError:
    def map(self, status_code: int, content: bytes) -> UpdateRepositoryPipelineScheduleErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_repository_pipeline_schedule_error_mapper: Final[
    ErrorMapper[UpdateRepositoryPipelineScheduleErrorBody]
] = _UpdateRepositoryPipelineScheduleError()
