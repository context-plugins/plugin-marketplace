from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse
from ..models.precondition_failed_error_response import PreconditionFailedErrorResponse

FeaturesControllerUpdateStalenessErrorBody: TypeAlias = (
    NotFoundErrorResponse | PreconditionFailedErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _FeaturesControllerUpdateStalenessError:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerUpdateStalenessErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 412:
                return decode_json[PreconditionFailedErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_update_staleness_error_mapper: Final[
    ErrorMapper[FeaturesControllerUpdateStalenessErrorBody]
] = _FeaturesControllerUpdateStalenessError()
