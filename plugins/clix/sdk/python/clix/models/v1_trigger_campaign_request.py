from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience import Audience, AudienceDict


class V1TriggerCampaignRequest(SdkBaseModel):
    """Request to trigger a campaign"""

    audience: Optional[Audience] = UNSET
    """Target audience for the campaign"""

    properties: Optional[Any] = UNSET
    """Custom properties for personalization"""


class V1TriggerCampaignRequestDict(TypedDict):
    audience: NotRequired[AudienceDict]
    properties: NotRequired[Any]
