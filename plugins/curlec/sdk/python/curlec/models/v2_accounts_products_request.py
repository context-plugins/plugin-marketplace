from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2AccountsProductsRequest(SdkBaseModel):
    product_name: Literal["route"] = "route"
    tnc_accepted: Optional[bool] = UNSET
    """Set to true to accept Razorpay TnC on behalf of the sub-merchant."""

    applicable_identified: Optional[bool] = UNSET


class V2AccountsProductsRequestDict(TypedDict):
    product_name: Literal["route"]
    tnc_accepted: NotRequired[bool]
    applicable_identified: NotRequired[bool]
