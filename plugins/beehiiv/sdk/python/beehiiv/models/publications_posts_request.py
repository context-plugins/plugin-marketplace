from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.post_email_capture_type_override1 import PostEmailCaptureTypeOverride1OrStr
from .enums.post_publish_status1 import PostPublishStatus1, PostPublishStatus1OrStr
from .enums.post_social_share1 import PostSocialShare1OrStr
from .post_email_settings1 import PostEmailSettings1, PostEmailSettings1Dict
from .post_metadata1 import PostMetadata1, PostMetadata1Dict
from .post_recipients1 import PostRecipients1, PostRecipients1Dict
from .post_web_settings1 import PostWebSettings1, PostWebSettings1Dict
from .unions.block17 import Block17, Block17Dict


class PublicationsPostsRequest(SdkBaseModel):
    blocks: Optional[list[Block17]] = UNSET
    """The structured content blocks that make up the post. Supports block types such as paragraph, image, heading,
    button, html, table, list, columns, and more. You can embed raw HTML snippets within blocks using the ``html`` block
    type. Either this field OR the ``body_content`` field must be provided."""

    body_content: Optional[str] = UNSET
    """The content of the post as a single raw HTML string. The HTML is wrapped in an ``htmlSnippet`` block internally.
    Note that ``<style>`` and ``<link>`` tags are removed during sanitization — use inline styles for all visual
    styling. Either this field OR the ``blocks`` field must be provided."""

    title: str
    """The title of the post."""

    subtitle: Optional[str] = UNSET
    """The subtitle of the post."""

    post_template_id: Optional[str] = UNSET
    """The ID of the template to use for the post. If not provided, the default template will be used."""

    status: PostPublishStatus1OrStr = PostPublishStatus1.DRAFT
    """The status of the post. If not provided, the default (``draft``) value will be used and the post will not be
    scheduled or published. Explicitly pass ``confirmed`` to have the post publish immediately (if no ``scheduled_at``
    is provided) or at the ``scheduled_at`` time."""

    scheduled_at: Optional[RFC3339DateTime] = UNSET
    """The time in which the post will be published. If not provided, the post will be published immediately unless
    ``status`` is set to ``draft``. A draft post cannot be scheduled."""

    custom_link_tracking_enabled: Optional[bool] = UNSET
    """If true, custom link tracking will be enabled for this post. If not provided, the default value will be used."""

    email_capture_type_override: Optional[PostEmailCaptureTypeOverride1OrStr] = UNSET
    """The email capture type to use for this post. If not provided, the default value will be used."""

    override_scheduled_at: Optional[RFC3339DateTime] = UNSET
    """If you wish to display a date other than the scheduled_at date in the email, you can provide a date here. This
    will not affect the actual publish date of the post."""

    social_share: Optional[PostSocialShare1OrStr] = UNSET
    """The social share type to use for this post. If not provided, the default value will be used."""

    thumbnail_image_url: Optional[str] = UNSET
    """The URL of the thumbnail image to use for the post. If not provided, the default value will be used."""

    recipients: Optional[PostRecipients1] = UNSET
    """The recipients to use for this post. If not provided, the default value will be used."""

    email_settings: Optional[PostEmailSettings1] = UNSET
    """The email settings to use for this post. If not provided, the default value will be used."""

    web_settings: Optional[PostWebSettings1] = UNSET
    """The web settings to use for this post. If not provided, the default value will be used."""

    seo_settings: Optional[PostMetadata1] = UNSET
    """The metadata to use for this post. If not provided, the default value will be used."""

    content_tags: Optional[list[str]] = UNSET
    """The content tags to use for this post. If not provided, the default value will be used."""

    guest_author_ids: Optional[list[str]] = UNSET
    """The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to the publication.
    Obtain IDs from the List Authors endpoint. When provided, replaces all existing guest authors on the post."""

    team_author_ids: Optional[list[str]] = UNSET
    """The prefixed IDs of the team members to associate with this post as authors. Team authors must have access to the
    publication. Note the List Authors endpoint only returns team members who already have a byline on a published post
    in this publication, so it will not surface IDs for a team member's first assignment. When provided, replaces all
    existing team authors on the post."""

    headers: Optional[dict[str, str]] = UNSET
    """The headers to use for this post. If not provided, the default value will be used."""

    custom_fields: Optional[dict[str, str]] = UNSET
    """The custom fields to use for this post. If not provided, the default value will be used."""

    newsletter_list_id: Optional[str] = UNSET
    """The prefixed ID of the newsletter list to associate with this post. When provided, the post will only be sent to
    subscribers of this list."""


class PublicationsPostsRequestDict(TypedDict):
    blocks: NotRequired[list[Block17Dict]]
    body_content: NotRequired[str]
    title: str
    subtitle: NotRequired[str]
    post_template_id: NotRequired[str]
    status: NotRequired[PostPublishStatus1OrStr]
    scheduled_at: NotRequired[RFC3339DateTime]
    custom_link_tracking_enabled: NotRequired[bool]
    email_capture_type_override: NotRequired[PostEmailCaptureTypeOverride1OrStr]
    override_scheduled_at: NotRequired[RFC3339DateTime]
    social_share: NotRequired[PostSocialShare1OrStr]
    thumbnail_image_url: NotRequired[str]
    recipients: NotRequired[PostRecipients1Dict]
    email_settings: NotRequired[PostEmailSettings1Dict]
    web_settings: NotRequired[PostWebSettings1Dict]
    seo_settings: NotRequired[PostMetadata1Dict]
    content_tags: NotRequired[list[str]]
    guest_author_ids: NotRequired[list[str]]
    team_author_ids: NotRequired[list[str]]
    headers: NotRequired[dict[str, str]]
    custom_fields: NotRequired[dict[str, str]]
    newsletter_list_id: NotRequired[str]
