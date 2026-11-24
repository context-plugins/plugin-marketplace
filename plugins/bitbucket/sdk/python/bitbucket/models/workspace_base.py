from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links6_bitbucket_workspaces_api import Links6BitbucketWorkspacesApi, Links6BitbucketWorkspacesApiDict


class WorkspaceBase(SdkBaseModel):
    """All Of object, workspace_base."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links6BitbucketWorkspacesApi] = UNSET
    uuid: Optional[str] = UNSET
    """The workspace's immutable id."""

    slug: Optional[str] = UNSET
    """The short label that identifies this workspace."""


class WorkspaceBaseDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links6BitbucketWorkspacesApiDict]
    uuid: NotRequired[str]
    slug: NotRequired[str]
