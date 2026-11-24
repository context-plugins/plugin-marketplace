from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name19 import Name19OrStr


class AnalyticsUtteranceGroupByKey(SdkBaseModel):
    name: Optional[Name19OrStr] = UNSET
    """The category by which the utterance analytics were grouped."""

    value: Optional[str] = UNSET
    """A member of the category by which the utterance analytics were grouped."""


class AnalyticsUtteranceGroupByKeyDict(TypedDict):
    name: NotRequired[Name19OrStr]
    value: NotRequired[str]
