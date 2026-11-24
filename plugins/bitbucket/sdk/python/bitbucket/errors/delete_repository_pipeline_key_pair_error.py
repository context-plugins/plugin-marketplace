from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoryPipelineKeyPairErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoryPipelineKeyPairError:
    def map(self, status_code: int, content: bytes) -> DeleteRepositoryPipelineKeyPairErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repository_pipeline_key_pair_error_mapper: Final[
    ErrorMapper[DeleteRepositoryPipelineKeyPairErrorBody]
] = _DeleteRepositoryPipelineKeyPairError()
