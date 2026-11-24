from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.customer_user_status import CustomerUserStatusOrStr


class CustomerUser(SdkBaseModel):
    id: str
    external_id: str = Field(alias="externalId")
    customer_external_id: str = Field(alias="customerExternalId")
    name: str | None
    email: str | None
    metadata: dict[str, Any] | None
    status: CustomerUserStatusOrStr
    created: bool
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class CustomerUserDict(TypedDict):
    id: str
    external_id: str
    customer_external_id: str
    name: str | None
    email: str | None
    metadata: dict[str, Any] | None
    status: CustomerUserStatusOrStr
    created: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
