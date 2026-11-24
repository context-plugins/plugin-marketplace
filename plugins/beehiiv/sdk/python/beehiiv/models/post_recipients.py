from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_email_recipients1 import PostEmailRecipients1, PostEmailRecipients1Dict
from .post_web_recipients2 import PostWebRecipients2, PostWebRecipients2Dict


class PostRecipients(SdkBaseModel):
    """Controls who receives the post. If omitted entirely, defaults to free tier only on both web and email. If a
    channel key (web or email) is provided but empty, no targets are created for that channel — omit the key to skip a
    channel."""

    web: PostWebRecipients2
    """Web audience targeting. Omit this key to create no web targets."""

    email: PostEmailRecipients1
    """Email audience targeting. Omit this key to create no email targets."""


class PostRecipientsDict(TypedDict):
    web: PostWebRecipients2Dict
    email: PostEmailRecipients1Dict
