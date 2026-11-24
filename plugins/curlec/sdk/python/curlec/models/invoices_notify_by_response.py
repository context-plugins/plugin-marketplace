from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvoicesNotifyByResponse(SdkBaseModel):
    success: Optional[bool] = UNSET


class InvoicesNotifyByResponseDict(TypedDict):
    success: NotRequired[bool]
