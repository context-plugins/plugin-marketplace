from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.precondition_failed_error_response import PreconditionFailedErrorResponse

FeaturesControllerUpdateStaticConfigurationV1ErrorBody: TypeAlias = PreconditionFailedErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FeaturesControllerUpdateStaticConfigurationV1Error:
    def map(self, status_code: int, content: bytes) -> FeaturesControllerUpdateStaticConfigurationV1ErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case 412:
                return decode_json[PreconditionFailedErrorResponse](content)
            case _:
                return RawError(status_code, content)


features_controller_update_static_configuration_v1_error_mapper: Final[
    ErrorMapper[FeaturesControllerUpdateStaticConfigurationV1ErrorBody]
] = _FeaturesControllerUpdateStaticConfigurationV1Error()
