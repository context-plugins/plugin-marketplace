from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .link import Link, LinkDict


class AccountLinks(SdkBaseModel):
    """Links related to an Account."""

    avatar: Optional[Link] = UNSET
    """A link to a resource related to this object."""


class AccountLinksDict(TypedDict):
    avatar: NotRequired[LinkDict]
