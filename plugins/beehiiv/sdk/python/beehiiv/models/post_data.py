from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.post_status import PostStatusOrStr


class PostData(SdkBaseModel):
    audience: str
    """The audience that the post is available to on the web. Only applicable if the platform is ``web`` or ``both``."""

    authors: list[str]
    """An array of author names"""

    content_tags: list[str]
    """All content tags that were associated with the post."""

    created: int
    """The time the post was created. Measured in seconds since the Unix epoch"""

    displayed_date: Optional[int] = UNSET
    """The time displayed in place of the ``publish_date``. Measured in seconds since the Unix epoch"""

    id: str
    """The prefixed post id"""

    preview_text: str
    """The email preview text"""

    publish_date: Optional[int] = UNSET
    """The time the post was set to be published. Measured in seconds since the Unix epoch"""

    slug: str
    """The web slug where this post can be accessed."""

    split_tested: bool
    """A flag to indicate if a split test was done. Only applicable to email posts."""

    status: PostStatusOrStr
    """The status of the post.<br>``draft`` - not been scheduled.<br>``confirmed`` - The post will be active after the
    ``scheduled_at``.<br>``archived`` - The post is no longer active."""

    subject_line: str
    """The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject line."""

    subtitle: str
    """The subtitle displayed in web views"""

    thumbnail_url: str
    """The URL of the thumbnail. Defaults to the Publication logo if not set."""

    title: str
    """The title displayed in web views"""

    web_url: Optional[str] = UNSET
    """The full URL where this post can be accessed on the web. Only applicable if the platform is ``web`` or
    ``both``."""

    platform: str
    """The platform that the post is or will be published to."""

    meta_default_description: Optional[str] = UNSET
    """Meta tag description for the post, called SEO Description in the admin UI"""

    meta_default_title: Optional[str] = UNSET
    """Meta tag title for the post, called SEO Title in the admin UI"""

    hidden_from_feed: bool
    """A flag to indicate if the post is hidden from the website feed."""

    enforce_gated_content: bool
    """A flag to indicate if the post enforces gated content for non-subscribers."""

    email_capture_popup: bool
    """A flag to indicate if popup email capture is enabled for this post."""


class PostDataDict(TypedDict):
    audience: str
    authors: list[str]
    content_tags: list[str]
    created: int
    displayed_date: NotRequired[int]
    id: str
    preview_text: str
    publish_date: NotRequired[int]
    slug: str
    split_tested: bool
    status: PostStatusOrStr
    subject_line: str
    subtitle: str
    thumbnail_url: str
    title: str
    web_url: NotRequired[str]
    platform: str
    meta_default_description: NotRequired[str]
    meta_default_title: NotRequired[str]
    hidden_from_feed: bool
    enforce_gated_content: bool
    email_capture_popup: bool
