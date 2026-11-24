from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links1 import Links1, Links1Dict


class MetaGivebutterApiDocumentationCampaignsApi(SdkBaseModel):
    current_page: int
    from_: int | None = Field(alias="from")
    last_page: int
    links: list[Links1]
    """Generated paginator links."""

    path: str | None
    """Base path for paginator generated URLs."""

    per_page: int
    """Number of items shown per page."""

    to: int | None
    """Number of the last item in the slice."""

    total: int
    """Total number of items being paginated."""

    unfiltered_total: str


class MetaGivebutterApiDocumentationCampaignsApiDict(TypedDict):
    current_page: int
    from_: int | None
    last_page: int
    links: list[Links1Dict]
    path: str | None
    per_page: int
    to: int | None
    total: int
    unfiltered_total: str
