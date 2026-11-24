from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WebhookEventFilter(str, Enum):
    """An event type, or ``*`` for all."""

    REVIEW_CREATED = "review.created"
    REVIEW_UPDATED = "review.updated"
    REPLY_PUBLISHED = "reply.published"
    REPLY_FAILED = "reply.failed"
    REPLY_UNKNOWN = "reply.unknown"
    CONNECTION_UPDATED = "connection.updated"
    U002A = "*"

    __str__ = str.__str__


WebhookEventFilterOrStr: TypeAlias = Annotated[WebhookEventFilter | str, open_enum_validator(WebhookEventFilter)]
