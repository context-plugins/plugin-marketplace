from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostEmailSettings(SdkBaseModel):
    from_address: Optional[str] = UNSET
    custom_live_url: Optional[str] = UNSET
    display_title_in_email: Optional[bool] = UNSET
    display_byline_in_email: Optional[bool] = UNSET
    display_subtitle_in_email: Optional[bool] = UNSET
    email_header_engagement_buttons: Optional[str] = UNSET
    email_header_social_share: Optional[str] = UNSET
    email_preview_text: Optional[str] = UNSET
    email_subject_line: Optional[str] = UNSET
    reply_to_address: Optional[str] = UNSET
    """Email address to set as Reply-To. Must be a verified reply-to address owned by the publication. Returns 422 if
    not found."""


class PostEmailSettingsDict(TypedDict):
    from_address: NotRequired[str]
    custom_live_url: NotRequired[str]
    display_title_in_email: NotRequired[bool]
    display_byline_in_email: NotRequired[bool]
    display_subtitle_in_email: NotRequired[bool]
    email_header_engagement_buttons: NotRequired[str]
    email_header_social_share: NotRequired[str]
    email_preview_text: NotRequired[str]
    email_subject_line: NotRequired[str]
    reply_to_address: NotRequired[str]
