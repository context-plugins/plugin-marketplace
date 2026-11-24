from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .colors import Colors, ColorsDict
from .links_platform_connectors_api import LinksPlatformConnectorsApi, LinksPlatformConnectorsApiDict


class Logo(SdkBaseModel):
    """Institution logo resource type"""

    colors: Optional[Colors] = UNSET
    """Colors contains institution colors type"""

    links: LinksPlatformConnectorsApi
    """institution logo resource links"""

    type_: Literal["image"] = Field(default="image", alias="type")
    """Resource type identifier. image ImageResourceType"""


class LogoDict(TypedDict):
    colors: NotRequired[ColorsDict]
    links: LinksPlatformConnectorsApiDict
    type_: Literal["image"]
