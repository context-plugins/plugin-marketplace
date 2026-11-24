from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .credit_grant_currency import CreditGrantCurrency, CreditGrantCurrencyDict
from .credit_grant_customer import CreditGrantCustomer, CreditGrantCustomerDict
from .credit_grant_result import CreditGrantResult, CreditGrantResultDict


class GrantCustomerCreditsResponse(SdkBaseModel):
    created: bool
    """True when this request created a new grant."""

    customer: CreditGrantCustomer
    credit_currency: CreditGrantCurrency = Field(alias="creditCurrency")
    grant: CreditGrantResult
    created_at: RFC3339DateTime = Field(alias="createdAt")


class GrantCustomerCreditsResponseDict(TypedDict):
    created: bool
    customer: CreditGrantCustomerDict
    credit_currency: CreditGrantCurrencyDict
    grant: CreditGrantResultDict
    created_at: RFC3339DateTime
