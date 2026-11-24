from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoryPipelineScheduleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoryPipelineScheduleError:
    def map(self, status_code: int, content: bytes) -> DeleteRepositoryPipelineScheduleErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repository_pipeline_schedule_error_mapper: Final[
    ErrorMapper[DeleteRepositoryPipelineScheduleErrorBody]
] = _DeleteRepositoryPipelineScheduleError()
