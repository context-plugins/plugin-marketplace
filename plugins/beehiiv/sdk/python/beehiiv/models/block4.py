from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rss_block_layout import RssBlockLayoutOrStr
from .enums.rss_cta_alignment import RssCtaAlignmentOrStr
from .enums.rss_cta_style import RssCtaStyleOrStr
from .enums.rss_selection_mode1 import RssSelectionMode1OrStr
from .enums.rss_thumbnail_position import RssThumbnailPositionOrStr
from .visibility_settings1 import VisibilitySettings1, VisibilitySettings1Dict
from .visual_settings1 import VisualSettings1, VisualSettings1Dict


class Block4(SdkBaseModel):
    type_: Literal["rss"] = Field(default="rss", alias="type")
    """Discriminator value: rss"""

    visual_settings: Optional[VisualSettings1] = UNSET
    """Optional styling for borders, spacing, colors, etc."""

    visibility_settings: Optional[VisibilitySettings1] = UNSET
    """Optional rules for when/where this block is shown, including dynamic content targeting via condition sets."""

    external_rss_feed_id: Optional[str] = Field(default=UNSET, alias="externalRssFeedId")
    """The ID of the external RSS feed."""

    rss_feed_url: Optional[str] = Field(default=UNSET, alias="rssFeedUrl")
    """The URL of the RSS feed."""

    article_layout: Optional[RssBlockLayoutOrStr] = Field(default=UNSET, alias="articleLayout")
    """The layout of the articles from the feed."""

    selection_mode: Optional[RssSelectionMode1OrStr] = Field(default=UNSET, alias="selectionMode")
    """How to select feed articles, by count or time window."""

    time_window_hours: Optional[int] = Field(default=UNSET, alias="timeWindowHours")
    """Trailing window in hours when selectionMode is time."""

    articles_to_show: Optional[int] = Field(default=UNSET, alias="articlesToShow")
    """The number of articles to show from the feed."""

    show_cta: Optional[bool] = Field(default=UNSET, alias="showCta")
    """Whether to show a call to action."""

    cta_text: Optional[str] = Field(default=UNSET, alias="ctaText")
    """The text of the call to action. Applicable if ctaStyle is button or link."""

    cta_style: Optional[RssCtaStyleOrStr] = Field(default=UNSET, alias="ctaStyle")
    """The style of the call to action."""

    cta_alignment: Optional[RssCtaAlignmentOrStr] = Field(default=UNSET, alias="ctaAlignment")
    """The alignment of the call to action."""

    refresh_on_send: Optional[bool] = Field(default=UNSET, alias="refreshOnSend")
    """Whether or not to refresh the contents from the RSS feed before sending out the email."""

    show_article_title: Optional[bool] = Field(default=UNSET, alias="showArticleTitle")
    """Whether to show the article title."""

    show_article_thumbnail: Optional[bool] = Field(default=UNSET, alias="showArticleThumbnail")
    """Whether to show the article thumbnail."""

    thumbnail_position: Optional[RssThumbnailPositionOrStr] = Field(default=UNSET, alias="thumbnailPosition")
    """The position of the thumbnail."""

    show_author: Optional[bool] = Field(default=UNSET, alias="showAuthor")
    """Whether to show the author."""

    show_published_date: Optional[bool] = Field(default=UNSET, alias="showPublishedDate")
    """Whether to show the date the article was published"""

    show_categories: Optional[bool] = Field(default=UNSET, alias="showCategories")
    """Whether to show the categories."""

    show_description: Optional[bool] = Field(default=UNSET, alias="showDescription")
    """Whether to show the article description."""

    show_content: Optional[bool] = Field(default=UNSET, alias="showContent")
    """Whether to show the article content."""


class Block4Dict(TypedDict):
    type_: Literal["rss"]
    visual_settings: NotRequired[VisualSettings1Dict]
    visibility_settings: NotRequired[VisibilitySettings1Dict]
    external_rss_feed_id: NotRequired[str]
    rss_feed_url: NotRequired[str]
    article_layout: NotRequired[RssBlockLayoutOrStr]
    selection_mode: NotRequired[RssSelectionMode1OrStr]
    time_window_hours: NotRequired[int]
    articles_to_show: NotRequired[int]
    show_cta: NotRequired[bool]
    cta_text: NotRequired[str]
    cta_style: NotRequired[RssCtaStyleOrStr]
    cta_alignment: NotRequired[RssCtaAlignmentOrStr]
    refresh_on_send: NotRequired[bool]
    show_article_title: NotRequired[bool]
    show_article_thumbnail: NotRequired[bool]
    thumbnail_position: NotRequired[RssThumbnailPositionOrStr]
    show_author: NotRequired[bool]
    show_published_date: NotRequired[bool]
    show_categories: NotRequired[bool]
    show_description: NotRequired[bool]
    show_content: NotRequired[bool]
