from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_environment import (
    ErrorResponseBusinessCentralAdministrationCenterEnvironment,
)

ListEnvironmentOperationsErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterEnvironment | RawError


@dataclass(frozen=True, slots=True)
class _ListEnvironmentOperationsError:
    def map(self, status_code: int, content: bytes) -> ListEnvironmentOperationsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterEnvironment](content)
            case _:
                return RawError(status_code, content)


list_environment_operations_error_mapper: Final[
    ErrorMapper[ListEnvironmentOperationsErrorBody]
] = _ListEnvironmentOperationsError()
