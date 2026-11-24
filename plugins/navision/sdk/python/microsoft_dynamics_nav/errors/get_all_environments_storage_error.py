from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_storage_api import (
    ErrorResponseBusinessCentralAdministrationCenterStorageApi,
)

GetAllEnvironmentsStorageErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError


@dataclass(frozen=True, slots=True)
class _GetAllEnvironmentsStorageError:
    def map(self, status_code: int, content: bytes) -> GetAllEnvironmentsStorageErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterStorageApi](content)
            case _:
                return RawError(status_code, content)


get_all_environments_storage_error_mapper: Final[
    ErrorMapper[GetAllEnvironmentsStorageErrorBody]
] = _GetAllEnvironmentsStorageError()
