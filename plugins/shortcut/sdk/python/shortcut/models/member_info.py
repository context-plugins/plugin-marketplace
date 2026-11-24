from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .basic_workspace_info import BasicWorkspaceInfo, BasicWorkspaceInfoDict
from .member_info_organization2 import MemberInfoOrganization2, MemberInfoOrganization2Dict


class MemberInfo(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    is_owner: bool
    mention_name: str
    name: str
    role: str
    workspace2: BasicWorkspaceInfo
    organization2: MemberInfoOrganization2


class MemberInfoDict(TypedDict):
    id: UUID
    is_owner: bool
    mention_name: str
    name: str
    role: str
    workspace2: BasicWorkspaceInfoDict
    organization2: MemberInfoOrganization2Dict
