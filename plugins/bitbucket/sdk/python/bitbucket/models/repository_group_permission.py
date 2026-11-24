from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.permission_bitbucket_repositories_api import PermissionBitbucketRepositoriesApiOrStr
from .group_bitbucket_repositories_api import GroupBitbucketRepositoriesApi, GroupBitbucketRepositoriesApiDict
from .links3_bitbucket_deployments_api import Links3BitbucketDeploymentsApi, Links3BitbucketDeploymentsApiDict
from .repository_bitbucket_repositories_api import (
    RepositoryBitbucketRepositoriesApi,
    RepositoryBitbucketRepositoriesApiDict,
)


class RepositoryGroupPermission(SdkBaseModel):
    """A group's permission for a given repository."""

    type_: str = Field(alias="type")
    links: Optional[Links3BitbucketDeploymentsApi] = UNSET
    permission: Optional[PermissionBitbucketRepositoriesApiOrStr] = UNSET
    group: Optional[GroupBitbucketRepositoriesApi] = UNSET
    repository: Optional[RepositoryBitbucketRepositoriesApi] = UNSET


class RepositoryGroupPermissionDict(TypedDict):
    type_: str
    links: NotRequired[Links3BitbucketDeploymentsApiDict]
    permission: NotRequired[PermissionBitbucketRepositoriesApiOrStr]
    group: NotRequired[GroupBitbucketRepositoriesApiDict]
    repository: NotRequired[RepositoryBitbucketRepositoriesApiDict]
