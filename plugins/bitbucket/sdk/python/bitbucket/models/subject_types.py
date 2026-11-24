from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository_bitbucket_webhooks_api import RepositoryBitbucketWebhooksApi, RepositoryBitbucketWebhooksApiDict
from .workspace_bitbucket_webhooks_api import WorkspaceBitbucketWebhooksApi, WorkspaceBitbucketWebhooksApiDict


class SubjectTypes(SdkBaseModel):
    """The mapping of resource/subject types pointing to their individual event types."""

    model_config = ConfigDict(extra="forbid")

    repository: Optional[RepositoryBitbucketWebhooksApi] = UNSET
    workspace: Optional[WorkspaceBitbucketWebhooksApi] = UNSET


class SubjectTypesDict(TypedDict):
    repository: NotRequired[RepositoryBitbucketWebhooksApiDict]
    workspace: NotRequired[WorkspaceBitbucketWebhooksApiDict]
