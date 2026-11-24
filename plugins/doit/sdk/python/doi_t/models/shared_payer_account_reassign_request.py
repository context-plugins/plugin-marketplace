from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SharedPayerAccountReassignRequest(SdkBaseModel):
    customer_id: str = Field(alias="customerId")
    """Customer to reassign the account to: ``{customerId}`` (the reseller itself) or a T3 end customer within its
    hierarchy."""


class SharedPayerAccountReassignRequestDict(TypedDict):
    customer_id: str
