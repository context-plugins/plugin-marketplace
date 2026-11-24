from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state_shortcut_members_api import StateShortcutMembersApiOrStr
from .profile import Profile, ProfileDict


class Member(SdkBaseModel):
    """Details about an individual user within the Workspace."""

    model_config = ConfigDict(extra="forbid")

    role: str
    """The Member's role in the Workspace."""

    entity_type: str
    """A string description of this resource."""

    disabled: bool
    """True/false boolean indicating whether the Member has been disabled within the Workspace."""

    global_id: str
    state: StateShortcutMembersApiOrStr
    """The user state, one of partial, full, disabled, or imported. A partial user is disabled, has no means to log in,
    and is not an import user. A full user is enabled and has a means to log in. A disabled user is disabled and has a
    means to log in. An import user is disabled, has no means to log in, and is marked as an import user."""

    updated_at: RFC3339DateTime | None
    """The time/date the Member was last updated."""

    created_without_invite: bool
    """Whether this member was created as a placeholder entity."""

    group_ids: list[UUID]
    """The Member's group ids"""

    id: UUID
    """The Member's ID in Shortcut."""

    installation_id: Optional[UUID] = UNSET
    """Only set for agents. The installation id associated with this agent."""

    profile: Profile
    """A group of Member profile details."""

    created_at: RFC3339DateTime | None
    """The time/date the Member was created."""

    replaced_by: Optional[UUID] = UNSET
    """The id of the member that replaces this one when merged."""


class MemberDict(TypedDict):
    role: str
    entity_type: str
    disabled: bool
    global_id: str
    state: StateShortcutMembersApiOrStr
    updated_at: RFC3339DateTime | None
    created_without_invite: bool
    group_ids: list[UUID]
    id: UUID
    installation_id: NotRequired[UUID]
    profile: ProfileDict
    created_at: RFC3339DateTime | None
    replaced_by: NotRequired[UUID]
