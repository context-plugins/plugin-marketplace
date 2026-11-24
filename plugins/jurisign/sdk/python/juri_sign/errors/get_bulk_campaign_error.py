from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetBulkCampaignErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetBulkCampaignError:
    def map(self, status_code: int, content: bytes) -> GetBulkCampaignErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_bulk_campaign_error_mapper: Final[ErrorMapper[GetBulkCampaignErrorBody]] = _GetBulkCampaignError()
