from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VpaRazorpayXFundAccountsApi(SdkBaseModel):
    username: Optional[str] = UNSET
    handle: Optional[str] = UNSET
    address: Optional[str] = UNSET


class VpaRazorpayXFundAccountsApiDict(TypedDict):
    username: NotRequired[str]
    handle: NotRequired[str]
    address: NotRequired[str]
