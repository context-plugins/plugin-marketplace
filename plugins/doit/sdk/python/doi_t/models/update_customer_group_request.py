from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateCustomerGroupRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    member_customer_ids: Optional[list[str]] = Field(default=UNSET, alias="memberCustomerIds")


class UpdateCustomerGroupRequestDict(TypedDict):
    name: NotRequired[str]
    member_customer_ids: NotRequired[list[str]]
