from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FundAccountsRequest1(SdkBaseModel):
    active: bool


class FundAccountsRequest1Dict(TypedDict):
    active: bool
