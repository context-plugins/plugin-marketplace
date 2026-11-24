from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateRepositoryPipelineScheduleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateRepositoryPipelineScheduleError:
    def map(self, status_code: int, content: bytes) -> CreateRepositoryPipelineScheduleErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_repository_pipeline_schedule_error_mapper: Final[
    ErrorMapper[CreateRepositoryPipelineScheduleErrorBody]
] = _CreateRepositoryPipelineScheduleError()
