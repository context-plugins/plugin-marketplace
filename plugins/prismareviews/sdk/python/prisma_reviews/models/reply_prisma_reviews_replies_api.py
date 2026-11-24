from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status_prisma_reviews_replies_api import StatusPrismaReviewsRepliesApiOrStr


class ReplyPrismaReviewsRepliesApi(SdkBaseModel):
    """The business reply to a review."""

    text: str
    """Reply text."""

    created_at: RFC3339DateTime | None
    """When the reply was published. ``null`` while a first reply is queued; when a reply is replaced, it keeps the
    previous value until the new one is published."""

    status: StatusPrismaReviewsRepliesApiOrStr | None
    """``published`` (live on the platform, whoever wrote it), ``queued`` (sent through Prisma, waiting to be
    published), ``failed`` (the platform refused it; see ``error``) or ``unknown`` (the request went out but the
    platform never answered and the reply can't be read back, so Prisma didn't retry; check the review on the platform
    before posting again; see ``error``)."""

    error: str | None
    """Why publishing failed, when ``status`` is ``failed``."""


class ReplyPrismaReviewsRepliesApiDict(TypedDict):
    text: str
    created_at: RFC3339DateTime | None
    status: StatusPrismaReviewsRepliesApiOrStr | None
    error: str | None
