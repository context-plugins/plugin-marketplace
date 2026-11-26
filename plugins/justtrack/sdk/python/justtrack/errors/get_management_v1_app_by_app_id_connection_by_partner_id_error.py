from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetManagementV1AppByAppIdConnectionByPartnerIdError:
    def map(self, status_code: int, content: bytes) -> GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_management_v1_app_by_app_id_connection_by_partner_id_error_mapper: Final[
    ErrorMapper[GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody]
] = _GetManagementV1AppByAppIdConnectionByPartnerIdError()
