from __future__ import annotations

from typing import TypeAlias

from ..handle_campaign_recipient import HandleCampaignRecipient, HandleCampaignRecipientDict
from ..profile_campaign_recipient import ProfileCampaignRecipient, ProfileCampaignRecipientDict

CampaignRecipient: TypeAlias = HandleCampaignRecipient | ProfileCampaignRecipient
"""A single send target. Provide either ``handle`` (inline delivery address) or ``id`` (Personalization API profile ID),
but not both."""

CampaignRecipientDict: TypeAlias = HandleCampaignRecipientDict | ProfileCampaignRecipientDict
