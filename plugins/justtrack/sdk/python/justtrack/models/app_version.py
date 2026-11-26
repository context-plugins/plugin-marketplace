from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AppVersion(SdkBaseModel):
    code: str
    """Increasing number on android, major.minor on iOS"""

    name: str
    """The name of the app version"""


class AppVersionDict(TypedDict):
    code: str
    name: str
