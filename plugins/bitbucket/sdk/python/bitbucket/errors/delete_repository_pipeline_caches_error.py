from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoryPipelineCachesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoryPipelineCachesError:
    def map(self, status_code: int, content: bytes) -> DeleteRepositoryPipelineCachesErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repository_pipeline_caches_error_mapper: Final[
    ErrorMapper[DeleteRepositoryPipelineCachesErrorBody]
] = _DeleteRepositoryPipelineCachesError()
