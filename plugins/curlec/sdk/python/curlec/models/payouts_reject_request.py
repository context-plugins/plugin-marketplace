from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayoutsRejectRequest(SdkBaseModel):
    remarks: Optional[str] = UNSET


class PayoutsRejectRequestDict(TypedDict):
    remarks: NotRequired[str]
