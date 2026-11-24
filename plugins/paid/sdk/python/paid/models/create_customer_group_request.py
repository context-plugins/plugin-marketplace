from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CreateCustomerGroupRequest(SdkBaseModel):
    name: str
    description: OptionalNullable[str] = UNSET


class CreateCustomerGroupRequestDict(TypedDict):
    name: str
    description: NotRequired[str | None]
