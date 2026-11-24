from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class LinksBitbucketSnippetsApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    diff: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class LinksBitbucketSnippetsApiDict(TypedDict):
    self: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    diff: NotRequired[LinkDict]
