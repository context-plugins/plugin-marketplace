from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .links3_bitbucket_deployments_api import Links3BitbucketDeploymentsApi, Links3BitbucketDeploymentsApiDict
from .project_bitbucket_deployments_api import ProjectBitbucketDeploymentsApi, ProjectBitbucketDeploymentsApiDict


class ProjectDeployKey(SdkBaseModel):
    """All Of object, project_deploy_key."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    key: Optional[str] = UNSET
    """The deploy key value."""

    project: Optional[ProjectBitbucketDeploymentsApi] = UNSET
    comment: Optional[str] = UNSET
    """The comment parsed from the deploy key (if present)"""

    label: Optional[str] = UNSET
    """The user-defined label for the deploy key"""

    added_on: Optional[RFC3339DateTime] = UNSET
    last_used: Optional[RFC3339DateTime] = UNSET
    links: Optional[Links3BitbucketDeploymentsApi] = UNSET
    created_by: Optional[Account] = UNSET


class ProjectDeployKeyDict(TypedDict):
    type_: NotRequired[str]
    key: NotRequired[str]
    project: NotRequired[ProjectBitbucketDeploymentsApiDict]
    comment: NotRequired[str]
    label: NotRequired[str]
    added_on: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    links: NotRequired[Links3BitbucketDeploymentsApiDict]
    created_by: NotRequired[AccountDict]
