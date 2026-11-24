from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict
from .links4_bitbucket_workspaces_api import Links4BitbucketWorkspacesApi, Links4BitbucketWorkspacesApiDict
from .workspace_bitbucket_workspaces_api import WorkspaceBitbucketWorkspacesApi, WorkspaceBitbucketWorkspacesApiDict


class WorkspaceMembership(SdkBaseModel):
    """All Of object, workspace_membership."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links4BitbucketWorkspacesApi] = UNSET
    user: Optional[Account] = UNSET
    workspace: Optional[WorkspaceBitbucketWorkspacesApi] = UNSET


class WorkspaceMembershipDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links4BitbucketWorkspacesApiDict]
    user: NotRequired[AccountDict]
    workspace: NotRequired[WorkspaceBitbucketWorkspacesApiDict]
