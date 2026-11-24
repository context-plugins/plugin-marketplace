from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict
from .links1 import Links1, Links1Dict
from .workspace import Workspace, WorkspaceDict


class Group(SdkBaseModel):
    """All Of object, group."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links1] = UNSET
    owner: Optional[Account] = UNSET
    workspace: Optional[Workspace] = UNSET
    name: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    """The "sluggified" version of the group's name. This contains only ASCII characters and can therefore be slightly
    different than the name"""

    full_slug: Optional[str] = UNSET
    """The concatenation of the workspace's slug and the group's slug, separated with a colon (e.g.
    ``acme:developers``)"""


class GroupDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links1Dict]
    owner: NotRequired[AccountDict]
    workspace: NotRequired[WorkspaceDict]
    name: NotRequired[str]
    slug: NotRequired[str]
    full_slug: NotRequired[str]
