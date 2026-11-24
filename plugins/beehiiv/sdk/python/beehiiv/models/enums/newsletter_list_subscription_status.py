from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsletterListSubscriptionStatus(str, Enum):
    """The status of the newsletter list subscription."""

    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    PAUSED = "paused"

    __str__ = str.__str__


NewsletterListSubscriptionStatusOrStr: TypeAlias = Annotated[
    NewsletterListSubscriptionStatus | str, open_enum_validator(NewsletterListSubscriptionStatus)
]
