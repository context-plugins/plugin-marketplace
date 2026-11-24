from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResourceLink(SdkBaseModel):
    """Link object containing a link to the resource, self reference."""

    self: str
    """URL of the resource."""


class ResourceLinkDict(TypedDict):
    self: str
