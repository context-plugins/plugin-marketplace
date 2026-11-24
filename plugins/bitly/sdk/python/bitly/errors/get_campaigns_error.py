from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCampaignsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCampaignsError:
    def map(self, status_code: int, content: bytes) -> GetCampaignsErrorBody:
        match status_code:
            case 400 | 402 | 403 | 404 | 500 | 502 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_campaigns_error_mapper: Final[ErrorMapper[GetCampaignsErrorBody]] = _GetCampaignsError()
