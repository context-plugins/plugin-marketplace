from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

FeaturesControllerFindAllLinkedIssuesV1ErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeaturesControllerFindAllLinkedIssuesV1Error:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerFindAllLinkedIssuesV1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


features_controller_find_all_linked_issues_v1_error_mapper: Final[
    ErrorMapper[FeaturesControllerFindAllLinkedIssuesV1ErrorBody]
] = _FeaturesControllerFindAllLinkedIssuesV1Error()
