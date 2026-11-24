from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyticsUtteranceAttributeResult(SdkBaseModel):
    last_used_intent: Optional[str] = Field(default=UNSET, alias="lastUsedIntent")
    """The intent that the bot mapped the utterance to."""


class AnalyticsUtteranceAttributeResultDict(TypedDict):
    last_used_intent: NotRequired[str]
