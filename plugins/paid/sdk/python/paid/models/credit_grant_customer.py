from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreditGrantCustomer(SdkBaseModel):
    id: str
    """Stable Paid customer display ID."""

    external_id: str | None = Field(alias="externalId")
    """Customer ID from the caller's system, if set."""


class CreditGrantCustomerDict(TypedDict):
    id: str
    external_id: str | None
