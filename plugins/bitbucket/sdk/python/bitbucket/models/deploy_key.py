from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .links3_bitbucket_deployments_api import Links3BitbucketDeploymentsApi, Links3BitbucketDeploymentsApiDict
from .repository_bitbucket_deployments_api import (
    RepositoryBitbucketDeploymentsApi,
    RepositoryBitbucketDeploymentsApiDict,
)


class DeployKey(SdkBaseModel):
    """All Of object, deploy_key."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    key: Optional[str] = UNSET
    """The deploy key value."""

    repository: Optional[RepositoryBitbucketDeploymentsApi] = UNSET
    comment: Optional[str] = UNSET
    """The comment parsed from the deploy key (if present)"""

    label: Optional[str] = UNSET
    """The user-defined label for the deploy key"""

    added_on: Optional[RFC3339DateTime] = UNSET
    last_used: Optional[RFC3339DateTime] = UNSET
    links: Optional[Links3BitbucketDeploymentsApi] = UNSET
    owner: Optional[Account] = UNSET


class DeployKeyDict(TypedDict):
    type_: NotRequired[str]
    key: NotRequired[str]
    repository: NotRequired[RepositoryBitbucketDeploymentsApiDict]
    comment: NotRequired[str]
    label: NotRequired[str]
    added_on: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    links: NotRequired[Links3BitbucketDeploymentsApiDict]
    owner: NotRequired[AccountDict]
