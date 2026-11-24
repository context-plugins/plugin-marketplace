from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class WorkspaceBitbucketWebhooksApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    events: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class WorkspaceBitbucketWebhooksApiDict(TypedDict):
    events: NotRequired[LinkDict]
