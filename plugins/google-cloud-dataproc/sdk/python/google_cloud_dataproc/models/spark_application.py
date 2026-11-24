from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_info1 import ApplicationInfo1, ApplicationInfo1Dict


class SparkApplication(SdkBaseModel):
    """A summary of Spark Application"""

    name: Optional[str] = UNSET
    """Identifier. Name of the spark application"""

    application: Optional[ApplicationInfo1] = UNSET
    """Output only. High level information corresponding to an application."""


class SparkApplicationDict(TypedDict):
    name: NotRequired[str]
    application: NotRequired[ApplicationInfo1Dict]
