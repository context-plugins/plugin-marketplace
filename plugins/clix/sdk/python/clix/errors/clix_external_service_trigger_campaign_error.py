from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_text

ClixExternalServiceTriggerCampaignErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _ClixExternalServiceTriggerCampaignError:
    def map(self, status_code: int, content: bytes) -> ClixExternalServiceTriggerCampaignErrorBody:
        match status_code:
            case 400:
                return decode_text[str](content)
            case _:
                return RawError(status_code, content)


clix_external_service_trigger_campaign_error_mapper: Final[
    ErrorMapper[ClixExternalServiceTriggerCampaignErrorBody]
] = _ClixExternalServiceTriggerCampaignError()
