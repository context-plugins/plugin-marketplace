from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

ListBulkCampaignsErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListBulkCampaignsError:
    def map(self, status_code: int, content: bytes) -> ListBulkCampaignsErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


list_bulk_campaigns_error_mapper: Final[ErrorMapper[ListBulkCampaignsErrorBody]] = _ListBulkCampaignsError()
