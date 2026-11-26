from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_environment_settings import (
    ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings,
)

SetAppInsightsKeyErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings | RawError


@dataclass(frozen=True, slots=True)
class _SetAppInsightsKeyError:
    def map(self, status_code: int, content: bytes) -> SetAppInsightsKeyErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings](content)
            case _:
                return RawError(status_code, content)


set_app_insights_key_error_mapper: Final[ErrorMapper[SetAppInsightsKeyErrorBody]] = _SetAppInsightsKeyError()
