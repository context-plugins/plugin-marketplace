from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoryPipelineKnownHostErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoryPipelineKnownHostError:
    def map(self, status_code: int, content: bytes) -> DeleteRepositoryPipelineKnownHostErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repository_pipeline_known_host_error_mapper: Final[
    ErrorMapper[DeleteRepositoryPipelineKnownHostErrorBody]
] = _DeleteRepositoryPipelineKnownHostError()
