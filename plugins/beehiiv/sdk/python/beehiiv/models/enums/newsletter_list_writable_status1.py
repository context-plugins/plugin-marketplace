from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsletterListWritableStatus1(str, Enum):
    """The status of the newsletter list. Valid values are ``active`` and ``archived``. Setting ``draft`` is not
    permitted."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


NewsletterListWritableStatus1OrStr: TypeAlias = Annotated[
    NewsletterListWritableStatus1 | str, open_enum_validator(NewsletterListWritableStatus1)
]
