from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TextInitMessage(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: Optional[str] = UNSET
    """Initial message from the customer to the bot to begin a session."""


class TextInitMessageDict(TypedDict):
    text: NotRequired[str]
