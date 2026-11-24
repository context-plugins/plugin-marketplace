from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result import Result, ResultDict
from .website_declared import WebsiteDeclared, WebsiteDeclaredDict


class SearchResponse(SdkBaseModel):
    query: Optional[str] = UNSET
    results: Optional[list[Result]] = UNSET
    website_declared: Optional[list[WebsiteDeclared]] = UNSET
    """Businesses with no Jid file whose own website names them (tier website_declared). Not files and not confirmed by
    an official register."""


class SearchResponseDict(TypedDict):
    query: NotRequired[str]
    results: NotRequired[list[ResultDict]]
    website_declared: NotRequired[list[WebsiteDeclaredDict]]
