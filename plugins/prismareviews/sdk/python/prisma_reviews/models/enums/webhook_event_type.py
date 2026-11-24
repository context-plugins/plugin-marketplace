from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WebhookEventType(str, Enum):
    REVIEW_CREATED = "review.created"
    REVIEW_UPDATED = "review.updated"
    REPLY_PUBLISHED = "reply.published"
    REPLY_FAILED = "reply.failed"
    REPLY_UNKNOWN = "reply.unknown"
    CONNECTION_UPDATED = "connection.updated"
    LOCATION_SYNC_FAILED = "location.sync_failed"
    LOCATION_SYNC_RECOVERED = "location.sync_recovered"

    __str__ = str.__str__


WebhookEventTypeOrStr: TypeAlias = Annotated[WebhookEventType | str, open_enum_validator(WebhookEventType)]
