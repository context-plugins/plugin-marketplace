from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsletterListStatus(str, Enum):
    """The status of the newsletter list."""

    DRAFT = "draft"
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


NewsletterListStatusOrStr: TypeAlias = Annotated[NewsletterListStatus | str, open_enum_validator(NewsletterListStatus)]
