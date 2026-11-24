from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workspace_base import WorkspaceBase, WorkspaceBaseDict


class WorkspaceAccess(SdkBaseModel):
    """All Of object, workspace_access."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    administrator: Optional[bool] = UNSET
    """The permission level the user has for the workspace. True if the user is an administrator, otherwise False."""

    workspace: Optional[WorkspaceBase] = UNSET


class WorkspaceAccessDict(TypedDict):
    type_: NotRequired[str]
    administrator: NotRequired[bool]
    workspace: NotRequired[WorkspaceBaseDict]
