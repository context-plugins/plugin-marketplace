from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_group import CustomerGroup, CustomerGroupDict


class CustomerGroupsResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    customer_groups: list[CustomerGroup] = Field(alias="customerGroups")
    """Ready customer groups owned by the authenticated tenant."""


class CustomerGroupsResponseDict(TypedDict):
    customer_groups: list[CustomerGroupDict]
