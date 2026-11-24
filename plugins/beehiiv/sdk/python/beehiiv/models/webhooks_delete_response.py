from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhooksDeleteResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class WebhooksDeleteResponseDict(TypedDict):
    message: NotRequired[str]
