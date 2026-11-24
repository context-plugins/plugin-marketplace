from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerGroupMember(SdkBaseModel):
    id: str
    name: str
    external_id: str | None = Field(alias="externalId")


class CustomerGroupMemberDict(TypedDict):
    id: str
    name: str
    external_id: str | None
