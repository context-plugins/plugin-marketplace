from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.place_action_type import PlaceActionTypeOrStr


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1(SdkBaseModel):
    name: Optional[str] = UNSET
    uri: Optional[str] = UNSET
    place_action_type: Optional[PlaceActionTypeOrStr] = Field(default=UNSET, alias="placeActionType")
    is_preferred: Optional[bool] = Field(default=UNSET, alias="isPreferred")


class ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Dict(TypedDict):
    name: NotRequired[str]
    uri: NotRequired[str]
    place_action_type: NotRequired[PlaceActionTypeOrStr]
    is_preferred: NotRequired[bool]
