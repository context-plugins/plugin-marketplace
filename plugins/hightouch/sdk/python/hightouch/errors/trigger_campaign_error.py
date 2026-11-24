from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enums.internal_server_error import InternalServerErrorOrStr
from ..models.trigger_error_response import TriggerErrorResponse
from ..models.validate_error_json import ValidateErrorJson

TriggerCampaignErrorBody: TypeAlias = TriggerErrorResponse | ValidateErrorJson | InternalServerErrorOrStr | RawError


@dataclass(frozen=True, slots=True)
class _TriggerCampaignError:
    def map(self, status_code: int, content: bytes) -> TriggerCampaignErrorBody:
        match status_code:
            case 400 | 404 | 429:
                return decode_json[TriggerErrorResponse](content)
            case 401:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case 500:
                return decode_json[InternalServerErrorOrStr](content)
            case _:
                return RawError(status_code, content)


trigger_campaign_error_mapper: Final[ErrorMapper[TriggerCampaignErrorBody]] = _TriggerCampaignError()
