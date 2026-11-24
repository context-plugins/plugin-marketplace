from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .invitation import Invitation, InvitationDict
from .member import Member, MemberDict


class WorkspaceMembers(SdkBaseModel):
    """Never includes credentials."""

    members: list[Member]
    invitations: list[Invitation]
    """Pending, unexpired invitations only."""


class WorkspaceMembersDict(TypedDict):
    members: list[MemberDict]
    invitations: list[InvitationDict]
