from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .post_email_recipients_response2 import PostEmailRecipientsResponse2, PostEmailRecipientsResponse2Dict
from .post_web_recipients_response2 import PostWebRecipientsResponse2, PostWebRecipientsResponse2Dict


class PostRecipientsResponse(SdkBaseModel):
    """The targeting configuration currently set on the post."""

    web: Optional[PostWebRecipientsResponse2] = UNSET
    """Web targeting configuration. Absent if the post has no web targets."""

    email: Optional[PostEmailRecipientsResponse2] = UNSET
    """Email targeting configuration. Absent if the post has no email targets."""


class PostRecipientsResponseDict(TypedDict):
    web: NotRequired[PostWebRecipientsResponse2Dict]
    email: NotRequired[PostEmailRecipientsResponse2Dict]
