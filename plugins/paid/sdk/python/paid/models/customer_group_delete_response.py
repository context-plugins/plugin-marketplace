from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerGroupDeleteResponse(SdkBaseModel):
    deleted_group_id: UUID = Field(alias="deletedGroupId")
    unbound_customer_count: int = Field(alias="unboundCustomerCount")


class CustomerGroupDeleteResponseDict(TypedDict):
    deleted_group_id: UUID
    unbound_customer_count: int
