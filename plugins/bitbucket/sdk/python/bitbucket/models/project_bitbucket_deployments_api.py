from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .links1_bitbucket_deployments_api import Links1BitbucketDeploymentsApi, Links1BitbucketDeploymentsApiDict
from .team import Team, TeamDict


class ProjectBitbucketDeploymentsApi(SdkBaseModel):
    """All Of object, project_Bitbucket Deployments API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links1BitbucketDeploymentsApi] = UNSET
    uuid: Optional[str] = UNSET
    """The project's immutable id."""

    key: Optional[str] = UNSET
    """The project's key."""

    owner: Optional[Team] = UNSET
    name: Optional[str] = UNSET
    """The name of the project."""

    description: Optional[str] = UNSET
    is_private: Optional[bool] = UNSET
    """Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only
    visible to team members. Note that private projects cannot contain public repositories."""

    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    has_publicly_visible_repos: Optional[bool] = UNSET
    """Indicates whether the project contains publicly visible repositories. Note that private projects cannot contain
    public repositories."""


class ProjectBitbucketDeploymentsApiDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links1BitbucketDeploymentsApiDict]
    uuid: NotRequired[str]
    key: NotRequired[str]
    owner: NotRequired[TeamDict]
    name: NotRequired[str]
    description: NotRequired[str]
    is_private: NotRequired[bool]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    has_publicly_visible_repos: NotRequired[bool]
