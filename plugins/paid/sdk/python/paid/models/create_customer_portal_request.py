from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateCustomerPortalRequest(SdkBaseModel):
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """The Paid customer ID (display ID or UUID). Either this or externalCustomerId must be provided."""

    external_customer_id: Optional[str] = Field(default=UNSET, alias="externalCustomerId")
    """Your external customer ID. Either this or customerId must be provided."""

    return_url: Optional[str] = Field(default=UNSET, alias="returnUrl")
    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")


class CreateCustomerPortalRequestDict(TypedDict):
    customer_id: NotRequired[str]
    external_customer_id: NotRequired[str]
    return_url: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
