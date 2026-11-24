from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse
from ..models.precondition_failed_error_response import PreconditionFailedErrorResponse

FeaturesControllerUpdateSummaryErrorBody: TypeAlias = (
    BadRequestErrorResponse | NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _FeaturesControllerUpdateSummaryError:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerUpdateSummaryErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 412:
                return decode_json[PreconditionFailedErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_update_summary_error_mapper: Final[
    ErrorMapper[FeaturesControllerUpdateSummaryErrorBody]
] = _FeaturesControllerUpdateSummaryError()
