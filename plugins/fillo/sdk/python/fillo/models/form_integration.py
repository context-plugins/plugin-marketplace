from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.provider import ProviderOrStr


class FormIntegration(SdkBaseModel):
    provider: ProviderOrStr
    enabled: bool
    config: Any | None
    """The provider's FormIntegrationConfig keys only; null when the form has never used this destination. Sheets:
    spreadsheetId, spreadsheetUrl, spreadsheetTitle, sheetTab, sheetTabId, columns. Notion: databaseId, databaseUrl,
    properties, titleFieldId. Slack: slackChannelId, slackChannelLabel, slackChannelIsPrivate, slackTeamId,
    slackIncludeFieldIds. HubSpot: hubspotPortalId, hubspotEmailFieldId, hubspotMappings, hubspotFormGuid,
    hubspotFormName, hubspotCreateMarketableContact, hubspotCompany, hubspotDeal."""


class FormIntegrationDict(TypedDict):
    provider: ProviderOrStr
    enabled: bool
    config: Any | None
