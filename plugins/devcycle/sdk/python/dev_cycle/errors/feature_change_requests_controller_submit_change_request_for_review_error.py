from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeatureChangeRequestsControllerSubmitChangeRequestForReviewError:
    def map(
        self, status_code: int, content: bytes
    ) -> FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody:
        match status_code:
            case 400 | 403 | 405:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


feature_change_requests_controller_submit_change_request_for_review_error_mapper: Final[
    ErrorMapper[FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody]
] = _FeatureChangeRequestsControllerSubmitChangeRequestForReviewError()
