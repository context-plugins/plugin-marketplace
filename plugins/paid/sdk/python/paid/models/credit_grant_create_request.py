from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class CreditGrantCreateRequest(SdkBaseModel):
    credit_currency_key: str = Field(alias="creditCurrencyKey")
    """Stable machine-readable key for the active credit currency to grant."""

    amount: int
    """Number of credits to grant. This is not a monetary amount."""

    starts_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startsAt")
    """When these credits become spendable, as an RFC3339 datetime with timezone. Must be at or before the current
    server time. Defaults to the current server time when omitted."""

    expires_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    """When these credits expire, as an RFC3339 datetime with timezone. Omit or set null for credits that do not
    expire."""


class CreditGrantCreateRequestDict(TypedDict):
    credit_currency_key: str
    amount: int
    starts_at: NotRequired[RFC3339DateTime]
    expires_at: NotRequired[RFC3339DateTime | None]
