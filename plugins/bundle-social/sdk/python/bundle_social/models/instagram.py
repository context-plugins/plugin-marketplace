from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .carousel_item import CarouselItem, CarouselItemDict
from .enums.type1 import Type1, Type1OrStr
from .music_sound_info import MusicSoundInfo, MusicSoundInfoDict
from .tagged import Tagged, TaggedDict
from .trial_params import TrialParams, TrialParamsDict


class Instagram(SdkBaseModel):
    type_: Type1OrStr = Field(default=Type1.POST, alias="type")
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    alt_text: OptionalNullable[str] = Field(default=UNSET, alias="altText")
    """Alternative text for a single image post."""

    thumbnail_offset: float | None = Field(default=0.0, alias="thumbnailOffset")
    """Choose a frame of the published video as the cover photo in ms"""

    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    share_to_feed: bool | None = Field(default=True, alias="shareToFeed")
    """For Reels only.When true, indicates that the reel can appear in both the Feed and Reels tabs.When false,
    indicates the reel can only appear in the Reels tab."""

    collaborators: OptionalNullable[list[str]] = UNSET
    auto_fit_image: bool | None = Field(default=False, alias="autoFitImage")
    auto_crop_image: bool | None = Field(default=False, alias="autoCropImage")
    tagged: OptionalNullable[list[Tagged]] = UNSET
    carousel_items: OptionalNullable[list[CarouselItem]] = Field(default=UNSET, alias="carouselItems")
    location_id: OptionalNullable[str] = Field(default=UNSET, alias="locationId")
    trial_params: OptionalNullable[TrialParams] = Field(default=UNSET, alias="trialParams")
    """For Reels only. Trial reels are only shared to non-followers."""

    is_paid_partnership: bool | None = Field(default=False, alias="isPaidPartnership")
    """Enables the native "Paid partnership" disclosure label."""

    branded_content_sponsors: OptionalNullable[list[str]] = Field(default=UNSET, alias="brandedContentSponsors")
    """Up to 2 Instagram usernames of the brands tagged as paid-partnership sponsors."""

    music_sound_info: OptionalNullable[MusicSoundInfo] = Field(default=UNSET, alias="musicSoundInfo")
    """Information about the Instagram audio asset used for Reels publishing."""

    is_ai_generated: bool | None = Field(default=False, alias="isAiGenerated")
    """Set to true if the content was generated or modified by AI. Adds Instagram's AI content label."""


class InstagramDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    alt_text: NotRequired[str | None]
    thumbnail_offset: NotRequired[float | None]
    thumbnail: NotRequired[str | None]
    share_to_feed: NotRequired[bool | None]
    collaborators: NotRequired[list[str] | None]
    auto_fit_image: NotRequired[bool | None]
    auto_crop_image: NotRequired[bool | None]
    tagged: NotRequired[list[TaggedDict] | None]
    carousel_items: NotRequired[list[CarouselItemDict] | None]
    location_id: NotRequired[str | None]
    trial_params: NotRequired[TrialParamsDict | None]
    is_paid_partnership: NotRequired[bool | None]
    branded_content_sponsors: NotRequired[list[str] | None]
    music_sound_info: NotRequired[MusicSoundInfoDict | None]
    is_ai_generated: NotRequired[bool | None]
