from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TriggerCampaignResponse(SdkBaseModel):
    """Response containing the trigger ID"""

    trigger_id: Optional[str] = UNSET
    """Unique identifier for this campaign trigger"""


class V1TriggerCampaignResponseDict(TypedDict):
    trigger_id: NotRequired[str]
