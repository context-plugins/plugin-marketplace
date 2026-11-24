from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinksWebhooksApi(SdkBaseModel):
    self: Optional[str] = UNSET
    next: Optional[str] = UNSET


class LinksWebhooksApiDict(TypedDict):
    self: NotRequired[str]
    next: NotRequired[str]
