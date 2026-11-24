from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class Links3BitbucketIssueTrackerApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    comments: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    attachments: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    watch: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    vote: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class Links3BitbucketIssueTrackerApiDict(TypedDict):
    self: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    comments: NotRequired[LinkDict]
    attachments: NotRequired[LinkDict]
    watch: NotRequired[LinkDict]
    vote: NotRequired[LinkDict]
