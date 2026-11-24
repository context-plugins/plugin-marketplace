from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateRepositoryPipelineKeyPairErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateRepositoryPipelineKeyPairError:
    def map(self, status_code: int, content: bytes) -> UpdateRepositoryPipelineKeyPairErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_repository_pipeline_key_pair_error_mapper: Final[
    ErrorMapper[UpdateRepositoryPipelineKeyPairErrorBody]
] = _UpdateRepositoryPipelineKeyPairError()
