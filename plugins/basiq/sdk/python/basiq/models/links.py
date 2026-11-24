from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links(SdkBaseModel):
    public: str
    """Public URL of auth link."""

    self: str
    """URL of the resource"""


class LinksDict(TypedDict):
    public: str
    self: str
