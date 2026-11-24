from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayoutsApproveRequest(SdkBaseModel):
    remarks: Optional[str] = UNSET


class PayoutsApproveRequestDict(TypedDict):
    remarks: NotRequired[str]
