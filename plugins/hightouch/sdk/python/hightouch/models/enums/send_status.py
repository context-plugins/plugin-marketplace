from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SendStatus(str, Enum):
    """Delivery status of a send. ``not_found`` means no send with this id exists on the campaign, including a send that
    has not been processed yet."""

    SENT = "sent"
    DELIVERED = "delivered"
    BOUNCED = "bounced"
    FAILED = "failed"
    DROPPED = "dropped"
    NOT_FOUND = "not_found"

    __str__ = str.__str__


SendStatusOrStr: TypeAlias = Annotated[SendStatus | str, open_enum_validator(SendStatus)]
