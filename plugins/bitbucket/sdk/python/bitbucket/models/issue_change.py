from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .changes import Changes, ChangesDict
from .issue import Issue, IssueDict
from .links9 import Links9, Links9Dict
from .message import Message, MessageDict


class IssueChange(SdkBaseModel):
    """An issue change."""

    type_: str = Field(alias="type")
    links: Optional[Links9] = UNSET
    name: Optional[str] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    user: Optional[Account] = UNSET
    issue: Optional[Issue] = UNSET
    changes: Optional[Changes] = UNSET
    message: Optional[Message] = UNSET


class IssueChangeDict(TypedDict):
    type_: str
    links: NotRequired[Links9Dict]
    name: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    user: NotRequired[AccountDict]
    issue: NotRequired[IssueDict]
    changes: NotRequired[ChangesDict]
    message: NotRequired[MessageDict]
