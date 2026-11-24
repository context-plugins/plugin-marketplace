from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateBrowserSessionRequest(SdkBaseModel):
    """Request model for updating browser session state."""

    action: Literal["stop"] = "stop"
    """The action to perform on the session"""


class UpdateBrowserSessionRequestDict(TypedDict):
    action: Literal["stop"]
