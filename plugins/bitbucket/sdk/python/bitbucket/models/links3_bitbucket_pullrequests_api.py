from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class Links3BitbucketPullrequestsApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    commits: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    approve: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    diff: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    diffstat: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    comments: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    activity: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    merge: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    decline: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class Links3BitbucketPullrequestsApiDict(TypedDict):
    self: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    commits: NotRequired[LinkDict]
    approve: NotRequired[LinkDict]
    diff: NotRequired[LinkDict]
    diffstat: NotRequired[LinkDict]
    comments: NotRequired[LinkDict]
    activity: NotRequired[LinkDict]
    merge: NotRequired[LinkDict]
    decline: NotRequired[LinkDict]
