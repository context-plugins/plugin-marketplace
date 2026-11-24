from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPipelineForRepositoryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPipelineForRepositoryError:
    def map(self, status_code: int, content: bytes) -> GetPipelineForRepositoryErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pipeline_for_repository_error_mapper: Final[
    ErrorMapper[GetPipelineForRepositoryErrorBody]
] = _GetPipelineForRepositoryError()
