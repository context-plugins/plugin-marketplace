from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account import Account, AccountDict
from .links5_bitbucket_pullrequests_api import Links5BitbucketPullrequestsApi, Links5BitbucketPullrequestsApiDict
from .workspace_bitbucket_repositories_api import (
    WorkspaceBitbucketRepositoriesApi,
    WorkspaceBitbucketRepositoriesApiDict,
)


class GroupBitbucketRepositoriesApi(SdkBaseModel):
    """All Of object, group_Bitbucket Repositories API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links5BitbucketPullrequestsApi] = UNSET
    owner: Optional[Account] = UNSET
    workspace: Optional[WorkspaceBitbucketRepositoriesApi] = UNSET
    name: Optional[str] = UNSET
    slug: Optional[str] = UNSET
    """The "sluggified" version of the group's name. This contains only ASCII characters and can therefore be slightly
    different than the name"""

    full_slug: Optional[str] = UNSET
    """The concatenation of the workspace's slug and the group's slug, separated with a colon (e.g.
    ``acme:developers``)"""


class GroupBitbucketRepositoriesApiDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links5BitbucketPullrequestsApiDict]
    owner: NotRequired[AccountDict]
    workspace: NotRequired[WorkspaceBitbucketRepositoriesApiDict]
    name: NotRequired[str]
    slug: NotRequired[str]
    full_slug: NotRequired[str]
