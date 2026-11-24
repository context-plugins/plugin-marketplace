from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .organization_member import OrganizationMember, OrganizationMemberDict


class MemberList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    members: list[OrganizationMember]
    next_cursor: str = Field(alias="nextCursor")


class MemberListDict(TypedDict):
    members: list[OrganizationMemberDict]
    next_cursor: str
