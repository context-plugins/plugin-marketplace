from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1PartnerConfigurationsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1PartnerConfigurationsError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1PartnerConfigurationsErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_management_v1_partner_configurations_error_mapper: Final[
    ErrorMapper[PostManagementV1PartnerConfigurationsErrorBody]
] = _PostManagementV1PartnerConfigurationsError()
