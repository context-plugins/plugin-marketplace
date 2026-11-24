from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.media_format import MediaFormatOrStr
from .location_association import LocationAssociation, LocationAssociationDict


class MediaItemBundleSocialMiscApi(SdkBaseModel):
    name: Optional[str] = UNSET
    google_url: Optional[str] = Field(default=UNSET, alias="googleUrl")
    media_format: Optional[MediaFormatOrStr] = Field(default=UNSET, alias="mediaFormat")
    source_url: Optional[str] = Field(default=UNSET, alias="sourceUrl")
    thumbnail_url: Optional[str] = Field(default=UNSET, alias="thumbnailUrl")
    location_association: Optional[LocationAssociation] = Field(default=UNSET, alias="locationAssociation")
    description: Optional[str] = UNSET


class MediaItemBundleSocialMiscApiDict(TypedDict):
    name: NotRequired[str]
    google_url: NotRequired[str]
    media_format: NotRequired[MediaFormatOrStr]
    source_url: NotRequired[str]
    thumbnail_url: NotRequired[str]
    location_association: NotRequired[LocationAssociationDict]
    description: NotRequired[str]
