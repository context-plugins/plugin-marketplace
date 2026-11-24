from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .links2_bitbucket_deployments_api import Links2BitbucketDeploymentsApi, Links2BitbucketDeploymentsApiDict


class RefBitbucketDeploymentsApi(SdkBaseModel):
    """A ref object, representing a branch or tag in a repository."""

    type_: str = Field(alias="type")
    links: Optional[Links2BitbucketDeploymentsApi] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET


class RefBitbucketDeploymentsApiDict(TypedDict):
    type_: str
    links: NotRequired[Links2BitbucketDeploymentsApiDict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
