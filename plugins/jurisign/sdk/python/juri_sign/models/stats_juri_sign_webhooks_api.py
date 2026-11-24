from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatsJuriSignWebhooksApi(SdkBaseModel):
    success: Optional[int] = UNSET
    failed: Optional[int] = UNSET
    pending: Optional[int] = UNSET


class StatsJuriSignWebhooksApiDict(TypedDict):
    success: NotRequired[int]
    failed: NotRequired[int]
    pending: NotRequired[int]
