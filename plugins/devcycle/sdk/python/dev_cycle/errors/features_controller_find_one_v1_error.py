from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

FeaturesControllerFindOneV1ErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeaturesControllerFindOneV1Error:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerFindOneV1ErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_find_one_v1_error_mapper: Final[
    ErrorMapper[FeaturesControllerFindOneV1ErrorBody]
] = _FeaturesControllerFindOneV1Error()
