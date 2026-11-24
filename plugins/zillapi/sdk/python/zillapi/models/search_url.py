from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SearchUrl(SdkBaseModel):
    url: str
    """A zillow.com search URL that MUST contain a ``searchQueryState=`` query parameter. Pretty URLs (e.g.
    https://www.zillow.com/austin-tx/houses/) are rejected with 400 invalid_search_url."""


class SearchUrlDict(TypedDict):
    url: str
