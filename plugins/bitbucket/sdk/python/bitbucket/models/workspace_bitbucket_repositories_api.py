from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.forking_mode import ForkingModeOrStr
from .links4_bitbucket_repositories_api import Links4BitbucketRepositoriesApi, Links4BitbucketRepositoriesApiDict


class WorkspaceBitbucketRepositoriesApi(SdkBaseModel):
    """All Of object, workspace_Bitbucket Repositories API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links4BitbucketRepositoriesApi] = UNSET
    uuid: Optional[str] = UNSET
    """The workspace's immutable id."""

    name: Optional[str] = UNSET
    """The name of the workspace."""

    slug: Optional[str] = UNSET
    """The short label that identifies this workspace."""

    is_private: Optional[bool] = UNSET
    """Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently
    only visible to members."""

    is_privacy_enforced: Optional[bool] = UNSET
    """Indicates whether the workspace enforces private content, or whether it allows public content."""

    forking_mode: Optional[ForkingModeOrStr] = UNSET
    """Controls the rules for forking repositories within this workspace.

    * **allow_forks**: unrestricted forking
    * **internal_only**: prevents forking of private repositories outside the workspace or to public repositories"""

    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET


class WorkspaceBitbucketRepositoriesApiDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links4BitbucketRepositoriesApiDict]
    uuid: NotRequired[str]
    name: NotRequired[str]
    slug: NotRequired[str]
    is_private: NotRequired[bool]
    is_privacy_enforced: NotRequired[bool]
    forking_mode: NotRequired[ForkingModeOrStr]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
