from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePipelineForRepositoryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePipelineForRepositoryError:
    def map(self, status_code: int, content: bytes) -> CreatePipelineForRepositoryErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_pipeline_for_repository_error_mapper: Final[
    ErrorMapper[CreatePipelineForRepositoryErrorBody]
] = _CreatePipelineForRepositoryError()
