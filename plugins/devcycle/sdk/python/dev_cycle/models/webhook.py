from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.source_dev_cycle_management_webhooks_api import SourceDevCycleManagementWebhooksApiOrStr


class Webhook(SdkBaseModel):
    name: str
    """The name of the Webhook"""

    description: Optional[str] = UNSET
    """The description of the Webhook"""

    id: str = Field(alias="_id")
    """A unique Webhook ID"""

    project: str = Field(alias="_project")
    """The Project owning the Webhook"""

    feature: Optional[str] = Field(default=UNSET, alias="_feature")
    """Events in this webhook will only be triggered for this feature"""

    environments: list[str] = Field(alias="_environments")
    """Events in this webhook will only be triggered for these environments"""

    url: str
    """The URL to call once the type is triggered"""

    events: list[str]
    """The events that trigger the webhook"""

    source: Optional[SourceDevCycleManagementWebhooksApiOrStr] = UNSET
    """Source where webhook was created from"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """Auth0 User who created the webhook."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the webhook was created, set by the API"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the webhook was last updated, set by the API"""

    output_format: Optional[Any] = Field(default=UNSET, alias="outputFormat")
    """The type of format to send the payload changes in"""

    slack_integration: Optional[str] = Field(default=UNSET, alias="_slackIntegration")
    """The Slack Integration ID if the Webhook is created from a Slack command"""


class WebhookDict(TypedDict):
    name: str
    description: NotRequired[str]
    id: str
    project: str
    feature: NotRequired[str]
    environments: list[str]
    url: str
    events: list[str]
    source: NotRequired[SourceDevCycleManagementWebhooksApiOrStr]
    created_by: NotRequired[str]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    output_format: NotRequired[Any]
    slack_integration: NotRequired[str]
