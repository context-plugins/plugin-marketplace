from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookDelete(SdkBaseModel):
    status: Optional[str] = UNSET


class WebhookDeleteDict(TypedDict):
    status: NotRequired[str]
