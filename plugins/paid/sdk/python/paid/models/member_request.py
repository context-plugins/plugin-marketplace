from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MemberRequest(SdkBaseModel):
    customer_ids: list[str] = Field(alias="customerIds")
    """External customer IDs."""


class MemberRequestDict(TypedDict):
    customer_ids: list[str]
