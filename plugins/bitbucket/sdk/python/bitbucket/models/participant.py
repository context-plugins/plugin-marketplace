from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .enums.role import RoleOrStr
from .enums.state import StateOrStr


class Participant(SdkBaseModel):
    """All Of object, participant."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    user: Optional[Account] = UNSET
    role: Optional[RoleOrStr] = UNSET
    approved: Optional[bool] = UNSET
    state: Optional[StateOrStr] = UNSET
    participated_on: Optional[RFC3339DateTime] = UNSET
    """The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For
    commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they
    have not commented."""


class ParticipantDict(TypedDict):
    type_: NotRequired[str]
    user: NotRequired[AccountDict]
    role: NotRequired[RoleOrStr]
    approved: NotRequired[bool]
    state: NotRequired[StateOrStr]
    participated_on: NotRequired[RFC3339DateTime]
