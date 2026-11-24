from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetPipelineContainerLogErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineContainerLogError:
    def map(self, status_code: int, content: bytes) -> GetPipelineContainerLogErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_pipeline_container_log_error_mapper: Final[
    ErrorMapper[GetPipelineContainerLogErrorBody]
] = _GetPipelineContainerLogError()
