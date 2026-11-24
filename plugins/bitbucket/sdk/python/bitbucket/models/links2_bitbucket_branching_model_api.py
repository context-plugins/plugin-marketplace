from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class Links2BitbucketBranchingModelApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class Links2BitbucketBranchingModelApiDict(TypedDict):
    html: NotRequired[LinkDict]
    avatar: NotRequired[LinkDict]
