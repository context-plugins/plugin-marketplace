from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ThingsToKnow(SdkBaseModel):
    label: Optional[str] = UNSET
    """Topic cluster label"""

    subtitle: Optional[str] = UNSET
    """Subtitle or supporting text for the topic"""


class ThingsToKnowDict(TypedDict):
    label: NotRequired[str]
    subtitle: NotRequired[str]
