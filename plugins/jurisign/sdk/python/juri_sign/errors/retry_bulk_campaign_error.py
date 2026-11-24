from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

RetryBulkCampaignErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _RetryBulkCampaignError:
    def map(self, status_code: int, content: bytes) -> RetryBulkCampaignErrorBody:
        match status_code:
            case 401 | 404 | 422:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


retry_bulk_campaign_error_mapper: Final[ErrorMapper[RetryBulkCampaignErrorBody]] = _RetryBulkCampaignError()
