from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AskRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    query: str
    """What you are looking for, in natural language. Platform hints ("on Reddit", "papers") and time hints ("this
    week") steer engine and time-range selection."""


class AskRequestDict(TypedDict):
    query: str
