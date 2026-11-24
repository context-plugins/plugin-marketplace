from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.permission_bitbucket_repositories_api import PermissionBitbucketRepositoriesApiOrStr
from .links3_bitbucket_deployments_api import Links3BitbucketDeploymentsApi, Links3BitbucketDeploymentsApiDict
from .repository_bitbucket_repositories_api import (
    RepositoryBitbucketRepositoriesApi,
    RepositoryBitbucketRepositoriesApiDict,
)
from .user import User, UserDict


class RepositoryUserPermission(SdkBaseModel):
    """A user's direct permission for a given repository."""

    type_: str = Field(alias="type")
    permission: Optional[PermissionBitbucketRepositoriesApiOrStr] = UNSET
    user: Optional[User] = UNSET
    repository: Optional[RepositoryBitbucketRepositoriesApi] = UNSET
    links: Optional[Links3BitbucketDeploymentsApi] = UNSET


class RepositoryUserPermissionDict(TypedDict):
    type_: str
    permission: NotRequired[PermissionBitbucketRepositoriesApiOrStr]
    user: NotRequired[UserDict]
    repository: NotRequired[RepositoryBitbucketRepositoriesApiDict]
    links: NotRequired[Links3BitbucketDeploymentsApiDict]
