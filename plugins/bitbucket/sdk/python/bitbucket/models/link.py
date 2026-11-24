from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Link(SdkBaseModel):
    """A link to a resource related to this object."""

    model_config = ConfigDict(extra="forbid")

    href: Optional[str] = UNSET
    name: Optional[str] = UNSET


class LinkDict(TypedDict):
    href: NotRequired[str]
    name: NotRequired[str]
