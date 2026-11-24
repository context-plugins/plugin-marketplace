from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .free_post_content import FreePostContent, FreePostContentDict
from .premium_post_content import PremiumPostContent, PremiumPostContentDict


class PostContent(SdkBaseModel):
    """Optional html content for a post. Retrievable by including any of ``expand: [free_web_content,
    free_email_content, free_rss_content, premium_web_content, premium_email_content]`` in the post request body.

    **Note:** Generating HTML is slow. We recommend only requesting the HTML versions you need at the time."""

    free: Optional[FreePostContent] = UNSET
    """The requested free post HTML. This HTML has paywalls enforced."""

    premium: Optional[PremiumPostContent] = UNSET
    """The requested premium post HTML. This HTML does not have paywalls enforced."""


class PostContentDict(TypedDict):
    free: NotRequired[FreePostContentDict]
    premium: NotRequired[PremiumPostContentDict]
