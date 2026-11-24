from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueModelContentOverridesItemsScope(SdkBaseModel):
    customer_ids: Optional[list[str]] = Field(default=UNSET, alias="customerIds")
    customer_group_ids: Optional[list[str]] = Field(default=UNSET, alias="customerGroupIds")


class ValueModelContentOverridesItemsScopeDict(TypedDict):
    customer_ids: NotRequired[list[str]]
    customer_group_ids: NotRequired[list[str]]
