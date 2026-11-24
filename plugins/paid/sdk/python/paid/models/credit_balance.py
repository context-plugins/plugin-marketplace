from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .credit_grant import CreditGrant, CreditGrantDict
from .enums.credit_balance_recipient import CreditBalanceRecipientOrStr


class CreditBalance(SdkBaseModel):
    credits_currency_id: str = Field(alias="creditsCurrencyId")
    currency_name: str = Field(alias="currencyName")
    currency_key: str = Field(alias="currencyKey")
    available: float
    """Effective spendable balance across all grants in this pool, rollover-capped during rollover windows. Equals
    sum(grants[].available)."""

    used: float
    total: float
    period_start: RFC3339DateTime | None = Field(alias="periodStart")
    """Aggregate min(periodStart) across grants in this pool. Does not correspond to any real billing period when grants
    overlap. Use grants[].periodStart instead. Will be removed in a future API version."""

    period_end: RFC3339DateTime | None = Field(alias="periodEnd")
    """Aggregate max(periodEnd) across grants in this pool. Does not correspond to any real billing period when grants
    overlap. Use grants[].periodEnd or grants[].expiresAt instead. Will be removed in a future API version."""

    rollover_end_date: RFC3339DateTime | None = Field(alias="rolloverEndDate")
    """Aggregate max(rolloverEndDate) across grants in this pool. Use grants[].rolloverEndDate or grants[].expiresAt
    instead. Will be removed in a future API version."""

    recipient: CreditBalanceRecipientOrStr
    grants: list[CreditGrant]


class CreditBalanceDict(TypedDict):
    credits_currency_id: str
    currency_name: str
    currency_key: str
    available: float
    used: float
    total: float
    period_start: RFC3339DateTime | None
    period_end: RFC3339DateTime | None
    rollover_end_date: RFC3339DateTime | None
    recipient: CreditBalanceRecipientOrStr
    grants: list[CreditGrantDict]
