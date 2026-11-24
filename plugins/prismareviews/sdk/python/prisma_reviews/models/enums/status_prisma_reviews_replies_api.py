from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPrismaReviewsRepliesApi(str, Enum):
    """``published`` (live on the platform, whoever wrote it), ``queued`` (sent through Prisma, waiting to be
    published), ``failed`` (the platform refused it; see ``error``) or ``unknown`` (the request went out but the
    platform never answered and the reply can't be read back, so Prisma didn't retry; check the review on the platform
    before posting again; see ``error``)."""

    PUBLISHED = "published"
    QUEUED = "queued"
    FAILED = "failed"
    UNKNOWN = "unknown"

    __str__ = str.__str__


StatusPrismaReviewsRepliesApiOrStr: TypeAlias = Annotated[
    StatusPrismaReviewsRepliesApi | str, open_enum_validator(StatusPrismaReviewsRepliesApi)
]
