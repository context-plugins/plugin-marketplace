from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict
from .billing_explainer_payer import BillingExplainerPayer, BillingExplainerPayerDict


class BillingExplainerCustomer(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    customer_id: str = Field(alias="customerId")
    invoice_month: str = Field(alias="invoiceMonth")
    update_time: RFC3339DateTime = Field(alias="updateTime")
    payers: dict[str, BillingExplainerPayer]
    doit_credits: BillingExplainerMoney = Field(alias="doitCredits")
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""

    invoice_adjustments: BillingExplainerMoney = Field(alias="invoiceAdjustments")
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""


class BillingExplainerCustomerDict(TypedDict):
    customer_id: str
    invoice_month: str
    update_time: RFC3339DateTime
    payers: dict[str, BillingExplainerPayerDict]
    doit_credits: BillingExplainerMoneyDict
    invoice_adjustments: BillingExplainerMoneyDict
