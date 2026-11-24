from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

LookupBuildsV2BuildsLookupPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _LookupBuildsV2BuildsLookupPostError:
    def map(self, status_code: int, content: bytes) -> LookupBuildsV2BuildsLookupPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


lookup_builds_v2_builds_lookup_post_error_mapper: Final[
    ErrorMapper[LookupBuildsV2BuildsLookupPostErrorBody]
] = _LookupBuildsV2BuildsLookupPostError()
