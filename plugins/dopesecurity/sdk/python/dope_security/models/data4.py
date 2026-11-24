from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .assigned_group import AssignedGroup, AssignedGroupDict
from .assigned_user import AssignedUser, AssignedUserDict


class Data4(SdkBaseModel):
    users: list[AssignedUser]
    groups: list[AssignedGroup]


class Data4Dict(TypedDict):
    users: list[AssignedUserDict]
    groups: list[AssignedGroupDict]
