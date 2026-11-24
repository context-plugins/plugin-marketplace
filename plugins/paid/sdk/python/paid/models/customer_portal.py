from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.customer_portal_status import CustomerPortalStatusOrStr


class CustomerPortal(SdkBaseModel):
    id: str
    customer_id: str = Field(alias="customerId")
    url: str
    status: CustomerPortalStatusOrStr
    return_url: str | None = Field(alias="returnUrl")
    expires_at: RFC3339DateTime = Field(alias="expiresAt")
    created_at: RFC3339DateTime = Field(alias="createdAt")


class CustomerPortalDict(TypedDict):
    id: str
    customer_id: str
    url: str
    status: CustomerPortalStatusOrStr
    return_url: str | None
    expires_at: RFC3339DateTime
    created_at: RFC3339DateTime
