from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksPlatformConnectorsApi(SdkBaseModel):
    """institution logo resource links"""

    full: str
    """URL to full size logo"""

    square: str
    """Square formatted logo URL"""


class LinksPlatformConnectorsApiDict(TypedDict):
    full: str
    square: str
