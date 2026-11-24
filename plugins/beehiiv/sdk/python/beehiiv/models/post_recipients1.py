from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_email_recipients1 import PostEmailRecipients1, PostEmailRecipients1Dict
from .post_web_recipients2 import PostWebRecipients2, PostWebRecipients2Dict


class PostRecipients1(SdkBaseModel):
    """The recipients to use for this post. If not provided, the default value will be used."""

    web: PostWebRecipients2
    """Web audience targeting. Omit this key to create no web targets."""

    email: PostEmailRecipients1
    """Email audience targeting. Omit this key to create no email targets."""


class PostRecipients1Dict(TypedDict):
    web: PostWebRecipients2Dict
    email: PostEmailRecipients1Dict
