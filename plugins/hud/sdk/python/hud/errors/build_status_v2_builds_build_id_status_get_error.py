from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

BuildStatusV2BuildsBuildIdStatusGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _BuildStatusV2BuildsBuildIdStatusGetError:
    def map(self, status_code: int, content: bytes) -> BuildStatusV2BuildsBuildIdStatusGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


build_status_v2_builds_build_id_status_get_error_mapper: Final[
    ErrorMapper[BuildStatusV2BuildsBuildIdStatusGetErrorBody]
] = _BuildStatusV2BuildsBuildIdStatusGetError()
