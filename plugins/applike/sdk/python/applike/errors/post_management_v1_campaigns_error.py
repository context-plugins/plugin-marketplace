from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1CampaignsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1CampaignsError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1CampaignsErrorBody:
        match status_code:
            case 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_management_v1_campaigns_error_mapper: Final[
    ErrorMapper[PostManagementV1CampaignsErrorBody]
] = _PostManagementV1CampaignsError()
