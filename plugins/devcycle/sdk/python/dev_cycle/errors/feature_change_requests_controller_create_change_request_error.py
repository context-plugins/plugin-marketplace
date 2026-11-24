from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FeatureChangeRequestsControllerCreateChangeRequestErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FeatureChangeRequestsControllerCreateChangeRequestError:
    def map(self, status_code: int, content: bytes) -> FeatureChangeRequestsControllerCreateChangeRequestErrorBody:
        match status_code:
            case 400 | 409 | 412:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


feature_change_requests_controller_create_change_request_error_mapper: Final[
    ErrorMapper[FeatureChangeRequestsControllerCreateChangeRequestErrorBody]
] = _FeatureChangeRequestsControllerCreateChangeRequestError()
