from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinkedinActivityIntentTopic(SdkBaseModel):
    topic: Optional[str] = UNSET
    category: Optional[str] = UNSET


class LinkedinActivityIntentTopicDict(TypedDict):
    topic: NotRequired[str]
    category: NotRequired[str]
