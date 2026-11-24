from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsUtteranceAttribute(SdkBaseModel):
    name: Literal["LastUsedIntent"] = "LastUsedIntent"
    """An attribute to return. The only available attribute is the intent that the bot mapped the utterance to."""


class AnalyticsUtteranceAttributeDict(TypedDict):
    name: Literal["LastUsedIntent"]
