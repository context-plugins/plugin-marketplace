from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class Links2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    html: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    members: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    owners: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    projects: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    repositories: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    snippets: Optional[Link] = UNSET
    """A link to a resource related to this object."""

    self: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class Links2Dict(TypedDict):
    avatar: NotRequired[LinkDict]
    html: NotRequired[LinkDict]
    members: NotRequired[LinkDict]
    owners: NotRequired[LinkDict]
    projects: NotRequired[LinkDict]
    repositories: NotRequired[LinkDict]
    snippets: NotRequired[LinkDict]
    self: NotRequired[LinkDict]
