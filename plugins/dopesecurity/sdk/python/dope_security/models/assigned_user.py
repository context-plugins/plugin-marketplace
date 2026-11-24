from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssignedUser(SdkBaseModel):
    """A user assigned to a policy"""

    email: str
    """Email address of the assigned user"""

    name: str
    """Display name of the assigned user"""


class AssignedUserDict(TypedDict):
    email: str
    name: str
