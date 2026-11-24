from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.status2 import Status2OrStr
from .enums.type import Type, TypeOrStr
from .enums.version import Version, VersionOrStr


class WebhookRequestModel(SdkBaseModel):
    """Contains the information to create/update a specific webhook"""

    server_url: str = Field(alias="serverUrl")
    """URL that will receive the webhook call"""

    status: Status2OrStr
    """The status of the webhook"""

    version: VersionOrStr = Version.V1_0
    """The version of the webhook"""

    type_: TypeOrStr = Field(default=Type.ALL, alias="type")
    """The type of the webhook"""


class WebhookRequestModelDict(TypedDict):
    server_url: str
    status: Status2OrStr
    version: NotRequired[VersionOrStr]
    type_: NotRequired[TypeOrStr]
