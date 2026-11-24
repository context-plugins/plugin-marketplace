from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PaymentRequest(SdkBaseModel):
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    amount: Optional[float] = UNSET
    effective_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="effectiveDate")
    payee_name: Optional[str] = Field(default=UNSET, alias="payeeName")
    receiver_account_number: Optional[str] = Field(default=UNSET, alias="receiverAccountNumber")
    trace_number: Optional[str] = Field(default=UNSET, alias="traceNumber")
    originator_routing_number: Optional[str] = Field(default=UNSET, alias="originatorRoutingNumber")
    originator_account_number: Optional[str] = Field(default=UNSET, alias="originatorAccountNumber")


class PaymentRequestDict(TypedDict):
    customer_id: NotRequired[str]
    amount: NotRequired[float]
    effective_date: NotRequired[RFC3339DateTime]
    payee_name: NotRequired[str]
    receiver_account_number: NotRequired[str]
    trace_number: NotRequired[str]
    originator_routing_number: NotRequired[str]
    originator_account_number: NotRequired[str]
