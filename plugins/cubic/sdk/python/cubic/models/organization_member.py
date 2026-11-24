from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class OrganizationMember(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    github_user_id: str = Field(alias="githubUserId")
    github_login: str = Field(alias="githubLogin")
    work_email: str = Field(alias="workEmail")
    role: RoleOrStr
    seat: bool
    is_bot: bool = Field(alias="isBot")


class OrganizationMemberDict(TypedDict):
    github_user_id: str
    github_login: str
    work_email: str
    role: RoleOrStr
    seat: bool
    is_bot: bool
