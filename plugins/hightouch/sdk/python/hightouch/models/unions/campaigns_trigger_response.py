from __future__ import annotations

from typing import TypeAlias

from ..start_campaign_response import StartCampaignResponse, StartCampaignResponseDict
from ..trigger_error_response import TriggerErrorResponse, TriggerErrorResponseDict

CampaignsTriggerResponse: TypeAlias = StartCampaignResponse | TriggerErrorResponse

CampaignsTriggerResponseDict: TypeAlias = StartCampaignResponseDict | TriggerErrorResponseDict
