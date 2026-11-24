from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.conflict_error_response import ConflictErrorResponse
from ..models.precondition_failed_error_response import PreconditionFailedErrorResponse

FeaturesControllerCreateMultipleV1ErrorBody: TypeAlias = (
    BadRequestErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _FeaturesControllerCreateMultipleV1Error:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerCreateMultipleV1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case 409:
                return decode_json[ConflictErrorResponse](content)
            case 412:
                return decode_json[PreconditionFailedErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_create_multiple_v1_error_mapper: Final[
    ErrorMapper[FeaturesControllerCreateMultipleV1ErrorBody]
] = _FeaturesControllerCreateMultipleV1Error()
