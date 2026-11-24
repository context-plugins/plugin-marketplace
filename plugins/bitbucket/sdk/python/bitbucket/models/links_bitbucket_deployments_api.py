from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class LinksBitbucketDeploymentsApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    pullrequests: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    commits: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    forks: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    watchers: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    downloads: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    clone: Optional[list[Link]] = UNSET
    hooks: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class LinksBitbucketDeploymentsApiDict(TypedDict):
    self: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    avatar: NotRequired[LinkDict]
    pullrequests: NotRequired[LinkDict]
    commits: NotRequired[LinkDict]
    forks: NotRequired[LinkDict]
    watchers: NotRequired[LinkDict]
    downloads: NotRequired[LinkDict]
    clone: NotRequired[list[LinkDict]]
    hooks: NotRequired[LinkDict]
