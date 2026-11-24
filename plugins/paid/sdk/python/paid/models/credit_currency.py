from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.credit_currency_status import CreditCurrencyStatusOrStr


class CreditCurrency(SdkBaseModel):
    id: str
    """Unique identifier for this credit currency."""

    name: str
    """Human-readable name shown for this credit currency."""

    key: str
    """Stable machine-readable key for this credit currency. Keys are unique within an organization."""

    status: CreditCurrencyStatusOrStr
    """Whether this credit currency is active or archived."""

    description: str | None
    """Optional description for this credit currency."""

    archived_at: RFC3339DateTime | None = Field(alias="archivedAt")
    """When this credit currency was archived. Null means the currency is active."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """When this credit currency was created."""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """When this credit currency was last updated."""


class CreditCurrencyDict(TypedDict):
    id: str
    name: str
    key: str
    status: CreditCurrencyStatusOrStr
    description: str | None
    archived_at: RFC3339DateTime | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
