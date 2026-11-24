from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.post_audience import PostAudienceOrStr
from .enums.post_platform import PostPlatformOrStr
from .enums.post_status import PostStatus, PostStatusOrStr
from .post_content import PostContent, PostContentDict
from .post_recipients_response1 import PostRecipientsResponse1, PostRecipientsResponse1Dict
from .post_stats import PostStats, PostStatsDict


class Post(SdkBaseModel):
    id: str
    """The prefixed post id"""

    subtitle: str
    """The subtitle displayed in web views"""

    title: str
    """The title displayed in web views"""

    authors: list[str]
    """An array of author names"""

    created: int
    """The time the post was created. Measured in seconds since the Unix epoch"""

    status: PostStatusOrStr = PostStatus.DRAFT
    """The status of the post.<br>``draft`` - not been scheduled.<br>``confirmed`` - The post will be active after the
    ``scheduled_at``.<br>``archived`` - The post is no longer active."""

    publish_date: Optional[int] = UNSET
    """The time the post was set to be published. Measured in seconds since the Unix epoch"""

    displayed_date: Optional[int] = UNSET
    """The time displayed in place of the ``publish_date``. Measured in seconds since the Unix epoch"""

    split_tested: bool
    """A flag to indicate if a split test was done. Only applicable to email posts."""

    subject_line: str
    """The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject line."""

    preview_text: str
    """The email preview text"""

    slug: str
    """The web slug where this post can be accessed."""

    thumbnail_url: str
    """The URL of the thumbnail. Defaults to the Publication logo if not set."""

    web_url: str
    """The full URL where this post can be accessed on the web. Only applicable if the platform is ``web`` or
    ``both``."""

    preview_url: Optional[str] = UNSET
    """A stable URL to the post's email preview in the beehiiv app. Renders the current post content on every visit.
    Requires a beehiiv session with access to the publication. The same URL is returned on every create, update, or
    show. Supports optional query parameters to preview as a specific audience: ``platform`` (``email`` default, or
    ``web``), ``subscriber_type`` (``free`` default, or ``premium`` - requires ``tier_ids[]``), ``tier_ids[]`` (one or
    more tier ids, only used when ``subscriber_type=premium``), and ``subscriber_id`` (renders using that subscriber's
    real tier memberships and takes precedence over ``subscriber_type``/``tier_ids[]``)."""

    audience: PostAudienceOrStr
    """The audience that the post is available to on the web. Only applicable if the platform is ``web`` or ``both``."""

    platform: PostPlatformOrStr
    """The platform that the post is or will be published to."""

    content_tags: list[str]
    """All content tags that were associated with the post."""

    meta_default_description: Optional[str] = UNSET
    """Meta tag description for the post, called SEO Description in the admin UI"""

    meta_default_title: Optional[str] = UNSET
    """meta tag title for the post, called SEO Title in the admin UI"""

    newsletter_list_id: Optional[str] = UNSET
    """The prefixed ID of the newsletter list this post is associated with. When set, the post targets only subscribers
    of this newsletter list."""

    hidden_from_feed: bool = False
    """A flag to indicate if the post is hidden from the website feed."""

    enforce_gated_content: bool = False
    """A flag to indicate if the post enforces gated content for non-subscribers."""

    email_capture_popup: bool = False
    """A flag to indicate if popup email capture is enabled for this post."""

    recipients: Optional[PostRecipientsResponse1] = UNSET
    """The targeting configuration for this post."""

    recipient_count: Optional[int] = UNSET
    """Estimated (draft/confirmed) or actual (sent) number of email subscribers targeted by this post."""

    headers: Optional[dict[str, str]] = UNSET
    """Custom email headers set on this post."""

    from_address: Optional[str] = UNSET
    """The from address for this post. If not set, falls back to the publication default."""

    reply_to_address: Optional[str] = UNSET
    """The reply-to address for this post. If not set, falls back to the publication default."""

    content: Optional[PostContent] = UNSET
    """Optional html content for a post. Retrievable by including any of ``expand: [free_web_content,
    free_email_content, free_rss_content, premium_web_content, premium_email_content]`` in the post request body.

    **Note:** Generating HTML is slow. We recommend only requesting the HTML versions you need at the time."""

    stats: Optional[PostStats] = UNSET
    """Optional list of stats for a post. Retrievable by including ``expand: [stats]`` in the post request body.
    <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent requests may return consolidated click
    metrics rather than individual raw click metrics."""


class PostDict(TypedDict):
    id: str
    subtitle: str
    title: str
    authors: list[str]
    created: int
    status: PostStatusOrStr
    publish_date: NotRequired[int]
    displayed_date: NotRequired[int]
    split_tested: bool
    subject_line: str
    preview_text: str
    slug: str
    thumbnail_url: str
    web_url: str
    preview_url: NotRequired[str]
    audience: PostAudienceOrStr
    platform: PostPlatformOrStr
    content_tags: list[str]
    meta_default_description: NotRequired[str]
    meta_default_title: NotRequired[str]
    newsletter_list_id: NotRequired[str]
    hidden_from_feed: bool
    enforce_gated_content: bool
    email_capture_popup: bool
    recipients: NotRequired[PostRecipientsResponse1Dict]
    recipient_count: NotRequired[int]
    headers: NotRequired[dict[str, str]]
    from_address: NotRequired[str]
    reply_to_address: NotRequired[str]
    content: NotRequired[PostContentDict]
    stats: NotRequired[PostStatsDict]
