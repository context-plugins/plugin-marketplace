from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class Links6BitbucketWorkspacesApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class Links6BitbucketWorkspacesApiDict(TypedDict):
    avatar: NotRequired[LinkDict]
    self: NotRequired[LinkDict]
