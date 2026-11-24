from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .group import Group, GroupDict


class Groups(SdkBaseModel):
    groups: list[Group]


class GroupsDict(TypedDict):
    groups: list[GroupDict]
