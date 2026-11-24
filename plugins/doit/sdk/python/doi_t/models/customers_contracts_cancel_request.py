from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomersContractsCancelRequest(SdkBaseModel):
    reason: Optional[str] = UNSET
    """Optional cancellation reason."""


class CustomersContractsCancelRequestDict(TypedDict):
    reason: NotRequired[str]
