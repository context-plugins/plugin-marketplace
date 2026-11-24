from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_info1 import ApplicationInfo1, ApplicationInfo1Dict


class AccessSessionSparkApplicationResponse(SdkBaseModel):
    """A summary of Spark Application"""

    application: Optional[ApplicationInfo1] = UNSET
    """Output only. High level information corresponding to an application."""


class AccessSessionSparkApplicationResponseDict(TypedDict):
    application: NotRequired[ApplicationInfo1Dict]
