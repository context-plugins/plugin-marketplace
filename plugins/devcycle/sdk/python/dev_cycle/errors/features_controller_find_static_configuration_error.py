from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.precondition_failed_error_response import PreconditionFailedErrorResponse

FeaturesControllerFindStaticConfigurationErrorBody: TypeAlias = PreconditionFailedErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeaturesControllerFindStaticConfigurationError:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerFindStaticConfigurationErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case 412:
                return decode_json[PreconditionFailedErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_find_static_configuration_error_mapper: Final[
    ErrorMapper[FeaturesControllerFindStaticConfigurationErrorBody]
] = _FeaturesControllerFindStaticConfigurationError()
