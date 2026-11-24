from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

FeaturesControllerFindAllV1ErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeaturesControllerFindAllV1Error:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerFindAllV1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


features_controller_find_all_v1_error_mapper: Final[
    ErrorMapper[FeaturesControllerFindAllV1ErrorBody]
] = _FeaturesControllerFindAllV1Error()
