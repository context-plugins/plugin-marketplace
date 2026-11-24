from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationEngagementEmailType(str, Enum):
    ALL = "all"
    POST = "post"
    MESSAGE = "message"

    __str__ = str.__str__


PublicationEngagementEmailTypeOrStr: TypeAlias = Annotated[
    PublicationEngagementEmailType | str, open_enum_validator(PublicationEngagementEmailType)
]
