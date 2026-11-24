from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentLinksNotifyByResponse(SdkBaseModel):
    success: Optional[bool] = UNSET


class PaymentLinksNotifyByResponseDict(TypedDict):
    success: NotRequired[bool]
