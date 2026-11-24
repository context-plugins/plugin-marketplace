from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssignedGroup(SdkBaseModel):
    """A group assigned to a policy"""

    email: str
    """Email address of the assigned group"""

    name: str
    """Display name of the assigned group"""

    members_count: int = Field(alias="membersCount")
    """Number of members in the group"""


class AssignedGroupDict(TypedDict):
    email: str
    name: str
    members_count: int
