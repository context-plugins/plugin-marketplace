from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.content_merge_strategy1 import ContentMergeStrategy1OrStr
from .enums.post_email_capture_type_override2 import PostEmailCaptureTypeOverride2OrStr
from .enums.post_publish_status2 import PostPublishStatus2, PostPublishStatus2OrStr
from .enums.post_social_share2 import PostSocialShare2OrStr
from .post_email_settings2 import PostEmailSettings2, PostEmailSettings2Dict
from .post_metadata2 import PostMetadata2, PostMetadata2Dict
from .post_recipients2 import PostRecipients2, PostRecipients2Dict
from .post_web_settings2 import PostWebSettings2, PostWebSettings2Dict
from .unions.block17 import Block17, Block17Dict


class PublicationsPostsRequest1(SdkBaseModel):
    content_merge_strategy: Optional[ContentMergeStrategy1OrStr] = UNSET
    """Controls how provided ``blocks`` interact with the post's existing content. Defaults to ``replace``. Use
    ``append_to_template`` to preserve template header blocks when updating posts that were created from a template."""

    blocks: Optional[list[Block17]] = UNSET
    """The structured content blocks for the post. How these interact with existing content depends on
    ``content_merge_strategy`` (default: full replacement). Supports block types such as paragraph, image, heading,
    button, html, table, list, columns, and more. Cannot be provided together with ``body_content``."""

    body_content: Optional[str] = UNSET
    """Raw HTML to replace the post's current content. The HTML is wrapped in an ``htmlSnippet`` block internally. Note
    that ``<style>`` and ``<link>`` tags are removed during sanitization — use inline styles for all visual styling.
    Cannot be provided together with ``blocks``."""

    title: Optional[str] = UNSET
    """The title of the post."""

    subtitle: Optional[str] = UNSET
    """The subtitle of the post."""

    scheduled_at: Optional[RFC3339DateTime] = UNSET
    """The time at which the post will be published. Cannot be updated after the post has already been sent."""

    custom_link_tracking_enabled: Optional[bool] = UNSET
    """If true, custom link tracking will be enabled for this post."""

    email_capture_type_override: Optional[PostEmailCaptureTypeOverride2OrStr] = UNSET
    """The email capture type to use for this post."""

    override_scheduled_at: Optional[RFC3339DateTime] = UNSET
    """A display date that overrides the scheduled_at date shown in the email. Does not affect the actual publish
    date."""

    social_share: Optional[PostSocialShare2OrStr] = UNSET
    """The social share type to use for this post."""

    thumbnail_image_url: Optional[str] = UNSET
    """The URL of the thumbnail image to use for the post."""

    email_settings: Optional[PostEmailSettings2] = UNSET
    """The email settings to use for this post. Only the provided fields within this object will be updated."""

    web_settings: Optional[PostWebSettings2] = UNSET
    """The web settings to use for this post. Only the provided fields within this object will be updated."""

    seo_settings: Optional[PostMetadata2] = UNSET
    """The SEO metadata to use for this post. Only the provided fields within this object will be updated."""

    status: PostPublishStatus2OrStr = PostPublishStatus2.DRAFT
    """Transition the post's status. Use ``confirmed`` to schedule or publish a draft post. Only the ``draft`` →
    ``confirmed`` transition is supported — a confirmed post cannot be moved back to ``draft``."""

    content_tags: Optional[list[str]] = UNSET
    """The content tags for this post. When provided, this replaces all existing content tags on the post."""

    headers: Optional[dict[str, str]] = UNSET
    """Custom email headers for this post. Merges with publication-level headers at send time. System-managed headers
    (e.g. List-Unsubscribe, X-SMTPAPI) cannot be overridden."""

    guest_author_ids: Optional[list[str]] = UNSET
    """The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to the publication.
    When provided, replaces all existing guest authors on the post."""

    team_author_ids: Optional[list[str]] = UNSET
    """The prefixed IDs of the team members to associate with this post as authors. Team authors must have access to the
    publication. When provided, replaces all existing team authors on the post."""

    recipients: Optional[PostRecipients2] = UNSET
    """The recipients for this post. When provided, replaces all existing web and email audience targets with the
    specified values. If omitted, existing targets are unchanged."""

    newsletter_list_id: Optional[str] = UNSET
    """The prefixed ID of the newsletter list to associate with this post. When provided, updates the newsletter list
    association. Pass null to remove the association."""


class PublicationsPostsRequest1Dict(TypedDict):
    content_merge_strategy: NotRequired[ContentMergeStrategy1OrStr]
    blocks: NotRequired[list[Block17Dict]]
    body_content: NotRequired[str]
    title: NotRequired[str]
    subtitle: NotRequired[str]
    scheduled_at: NotRequired[RFC3339DateTime]
    custom_link_tracking_enabled: NotRequired[bool]
    email_capture_type_override: NotRequired[PostEmailCaptureTypeOverride2OrStr]
    override_scheduled_at: NotRequired[RFC3339DateTime]
    social_share: NotRequired[PostSocialShare2OrStr]
    thumbnail_image_url: NotRequired[str]
    email_settings: NotRequired[PostEmailSettings2Dict]
    web_settings: NotRequired[PostWebSettings2Dict]
    seo_settings: NotRequired[PostMetadata2Dict]
    status: NotRequired[PostPublishStatus2OrStr]
    content_tags: NotRequired[list[str]]
    headers: NotRequired[dict[str, str]]
    guest_author_ids: NotRequired[list[str]]
    team_author_ids: NotRequired[list[str]]
    recipients: NotRequired[PostRecipients2Dict]
    newsletter_list_id: NotRequired[str]
