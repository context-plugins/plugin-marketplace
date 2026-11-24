from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsletterListWritableStatus(str, Enum):
    """Valid status values when updating a newsletter list. draft is not permitted."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


NewsletterListWritableStatusOrStr: TypeAlias = Annotated[
    NewsletterListWritableStatus | str, open_enum_validator(NewsletterListWritableStatus)
]
