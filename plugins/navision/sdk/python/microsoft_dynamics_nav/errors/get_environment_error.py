from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_environments_api import (
    ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
)

GetEnvironmentErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetEnvironmentError:
    def map(self, status_code: int, content: bytes) -> GetEnvironmentErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](content)
            case _:
                return RawError(status_code, content)


get_environment_error_mapper: Final[ErrorMapper[GetEnvironmentErrorBody]] = _GetEnvironmentError()
