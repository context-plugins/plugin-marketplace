from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class File(SdkBaseModel):
    role: str
    """File role (frontside, backside)"""

    label: str
    """File label"""

    url: str
    """File download URL"""

    name: str
    """Original file name"""


class FileDict(TypedDict):
    role: str
    label: str
    url: str
    name: str
