from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookInput(SdkBaseModel):
    url: str
    """Public https endpoint (test mode allows localhost)."""

    events: Optional[list[str]] = UNSET
    """Subset of the 5 events, or ["*"]."""

    description: Optional[str] = UNSET
    enabled: Optional[bool] = UNSET


class WebhookInputDict(TypedDict):
    url: str
    events: NotRequired[list[str]]
    description: NotRequired[str]
    enabled: NotRequired[bool]
