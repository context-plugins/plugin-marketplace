from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CustomerAlias(SdkBaseModel):
    alias: str
    """Alternate external identifier that resolves to the customer."""

    customer_id: str = Field(alias="customerId")
    """Paid customer display ID this alias resolves to."""

    name: str | None
    description: str | None
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class CustomerAliasDict(TypedDict):
    alias: str
    customer_id: str
    name: str | None
    description: str | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
