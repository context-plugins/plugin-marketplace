from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionDeleteResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class SubscriptionDeleteResponseDict(TypedDict):
    message: NotRequired[str]
