from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError:
    def map(
        self, status_code: int, content: bytes
    ) -> FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody:
        match status_code:
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 405:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


feature_change_requests_controller_get_latest_feature_change_request_error_mapper: Final[
    ErrorMapper[FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody]
] = _FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError()
