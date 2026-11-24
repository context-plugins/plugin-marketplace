from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListBuildSourceV2BuildsBuildIdSourceGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListBuildSourceV2BuildsBuildIdSourceGetError:
    def map(self, status_code: int, content: bytes) -> ListBuildSourceV2BuildsBuildIdSourceGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_build_source_v2_builds_build_id_source_get_error_mapper: Final[
    ErrorMapper[ListBuildSourceV2BuildsBuildIdSourceGetErrorBody]
] = _ListBuildSourceV2BuildsBuildIdSourceGetError()
