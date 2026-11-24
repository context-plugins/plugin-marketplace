from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .icon import Icon, IconDict


class Profile(SdkBaseModel):
    """A group of Member profile details."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    deactivated: bool
    """A true/false boolean indicating whether the Member has been deactivated within Shortcut."""

    two_factor_auth_activated: Optional[bool] = UNSET
    """If Two Factor Authentication is activated for this User."""

    mention_name: str
    """The Member's username within the Organization."""

    name: str | None
    """The Member's name within the Organization."""

    is_agent: Optional[bool] = UNSET
    """Whether this profile is an Agent/Bot user."""

    gravatar_hash: str | None
    """This is the gravatar hash associated with email_address."""

    id: UUID
    """The unique identifier of the profile."""

    display_icon: Icon
    """Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web
    application."""

    is_owner: bool
    """A boolean indicating whether this profile is an owner at their associated organization."""

    email_address: str | None
    """The primary email address of the Member with the Organization."""


class ProfileDict(TypedDict):
    entity_type: str
    deactivated: bool
    two_factor_auth_activated: NotRequired[bool]
    mention_name: str
    name: str | None
    is_agent: NotRequired[bool]
    gravatar_hash: str | None
    id: UUID
    display_icon: IconDict
    is_owner: bool
    email_address: str | None
