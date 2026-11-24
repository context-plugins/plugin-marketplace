from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCampaignCalendarErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCampaignCalendarError:
    def map(self, status_code: int, content: bytes) -> GetCampaignCalendarErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_campaign_calendar_error_mapper: Final[ErrorMapper[GetCampaignCalendarErrorBody]] = _GetCampaignCalendarError()
