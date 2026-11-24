from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActivityType(SdkBaseModel):
    name: str
    """The name of this activity. The combination of activity type name and version must be unique within a domain."""

    version: str
    """The version of this activity. The combination of activity type name and version must be unique with in a
    domain."""


class ActivityTypeDict(TypedDict):
    name: str
    version: str
