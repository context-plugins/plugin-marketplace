from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError:
    def map(self, status_code: int, content: bytes) -> ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


reindex_build_source_v2_builds_build_id_source_reindex_post_error_mapper: Final[
    ErrorMapper[ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody]
] = _ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError()
