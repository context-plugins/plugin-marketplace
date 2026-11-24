from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status2 import Status2OrStr


class WebhookCreateResponse(SdkBaseModel):
    """Contains the information about a specific webhook"""

    external_id: UUID = Field(alias="externalId")
    """The unique ID of the webhook"""

    token: str
    """The unique ID of the webhook"""

    server_url: str = Field(alias="serverUrl")
    """The URL that will receive the webhook calls"""

    status: Status2OrStr
    """The status of the webhook"""


class WebhookCreateResponseDict(TypedDict):
    external_id: UUID
    token: str
    server_url: str
    status: Status2OrStr
