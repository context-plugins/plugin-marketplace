from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SharedPayerAccountReassignResult(SdkBaseModel):
    asset_id: Optional[str] = Field(default=UNSET, alias="assetId")
    """Asset ID of the reassigned account."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """Customer the account was reassigned to."""


class SharedPayerAccountReassignResultDict(TypedDict):
    asset_id: NotRequired[str]
    customer_id: NotRequired[str]
