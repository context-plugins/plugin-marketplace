from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_environments_api import (
    ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi,
)

ListAllEnvironmentsErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError


@dataclass(frozen=True, slots=True)
class _ListAllEnvironmentsError:
    def map(self, status_code: int, content: bytes) -> ListAllEnvironmentsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](content)
            case _:
                return RawError(status_code, content)


list_all_environments_error_mapper: Final[ErrorMapper[ListAllEnvironmentsErrorBody]] = _ListAllEnvironmentsError()
