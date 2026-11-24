from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostWebSettings2(SdkBaseModel):
    """The web settings to use for this post. Only the provided fields within this object will be updated."""

    display_subtitle_on_web: Optional[bool] = UNSET
    display_thumbnail_on_web: Optional[bool] = UNSET
    display_title_on_web: Optional[bool] = UNSET
    hide_from_feed: Optional[bool] = UNSET
    paywall_break_price_id: Optional[str] = UNSET
    """The prefixed ID of the price."""

    paywall_id: Optional[str] = UNSET
    """The prefixed ID of the paywall."""

    slug: Optional[str] = UNSET


class PostWebSettings2Dict(TypedDict):
    display_subtitle_on_web: NotRequired[bool]
    display_thumbnail_on_web: NotRequired[bool]
    display_title_on_web: NotRequired[bool]
    hide_from_feed: NotRequired[bool]
    paywall_break_price_id: NotRequired[str]
    paywall_id: NotRequired[str]
    slug: NotRequired[str]
