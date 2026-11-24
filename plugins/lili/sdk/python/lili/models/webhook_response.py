from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.status2 import Status2OrStr
from .enums.type import Type, TypeOrStr
from .enums.version import Version, VersionOrStr


class WebhookResponse(SdkBaseModel):
    """Contains the information about a specific webhook"""

    external_id: UUID = Field(alias="externalId")
    """The unique ID of the webhook"""

    server_url: str = Field(alias="serverUrl")
    """The URL that will receive the webhook calls"""

    status: Status2OrStr
    """The status of the webhook"""

    version: VersionOrStr = Version.V1_0
    """The version of the webhook"""

    type_: TypeOrStr = Field(default=Type.ALL, alias="type")
    """The type of the webhook"""


class WebhookResponseDict(TypedDict):
    external_id: UUID
    server_url: str
    status: Status2OrStr
    version: NotRequired[VersionOrStr]
    type_: NotRequired[TypeOrStr]
