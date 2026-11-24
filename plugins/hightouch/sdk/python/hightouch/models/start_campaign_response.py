from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_send_result import CampaignSendResult, CampaignSendResultDict


class StartCampaignResponse(SdkBaseModel):
    """Response body for a campaign trigger request. Results are returned in the same order as the input ``recipients``
    array."""

    model_config = ConfigDict(extra="forbid")

    results: list[CampaignSendResult]
    """Per-recipient outcomes. Accepted recipients are queued for delivery; rejected recipients were not sent."""


class StartCampaignResponseDict(TypedDict):
    results: list[CampaignSendResultDict]
