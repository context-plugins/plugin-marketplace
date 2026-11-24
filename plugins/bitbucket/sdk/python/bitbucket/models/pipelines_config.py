from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository_bitbucket_pipelines_api import RepositoryBitbucketPipelinesApi, RepositoryBitbucketPipelinesApiDict


class PipelinesConfig(SdkBaseModel):
    """All Of object, pipelines_config."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    enabled: Optional[bool] = UNSET
    """Whether Pipelines is enabled for the repository."""

    repository: Optional[RepositoryBitbucketPipelinesApi] = UNSET


class PipelinesConfigDict(TypedDict):
    type_: NotRequired[str]
    enabled: NotRequired[bool]
    repository: NotRequired[RepositoryBitbucketPipelinesApiDict]
