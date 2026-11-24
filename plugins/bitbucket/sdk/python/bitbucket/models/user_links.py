from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class UserLinks(SdkBaseModel):
    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    repositories: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class UserLinksDict(TypedDict):
    avatar: NotRequired[LinkDict]
    self: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    repositories: NotRequired[LinkDict]
