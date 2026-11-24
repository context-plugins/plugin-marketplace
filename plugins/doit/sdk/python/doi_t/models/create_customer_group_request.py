from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateCustomerGroupRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    member_customer_ids: list[str] = Field(alias="memberCustomerIds")


class CreateCustomerGroupRequestDict(TypedDict):
    name: str
    member_customer_ids: list[str]
