from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationEngagementEmailType1(str, Enum):
    """The email type filter applied to the engagement metrics. Defaults to ``all``."""

    ALL = "all"
    POST = "post"
    MESSAGE = "message"

    __str__ = str.__str__


PublicationEngagementEmailType1OrStr: TypeAlias = Annotated[
    PublicationEngagementEmailType1 | str, open_enum_validator(PublicationEngagementEmailType1)
]
