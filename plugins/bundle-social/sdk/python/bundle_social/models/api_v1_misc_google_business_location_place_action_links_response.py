from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .place_action_link import PlaceActionLink, PlaceActionLinkDict


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse(SdkBaseModel):
    place_action_links: Optional[list[PlaceActionLink]] = Field(default=UNSET, alias="placeActionLinks")
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponseDict(TypedDict):
    place_action_links: NotRequired[list[PlaceActionLinkDict]]
    next_page_token: NotRequired[str]
