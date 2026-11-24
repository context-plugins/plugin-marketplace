from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

OverridesControllerUpdateFeatureOverrideErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _OverridesControllerUpdateFeatureOverrideError:
    def map(self, status_code: int, content: bytes) -> OverridesControllerUpdateFeatureOverrideErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


overrides_controller_update_feature_override_error_mapper: Final[
    ErrorMapper[OverridesControllerUpdateFeatureOverrideErrorBody]
] = _OverridesControllerUpdateFeatureOverrideError()
