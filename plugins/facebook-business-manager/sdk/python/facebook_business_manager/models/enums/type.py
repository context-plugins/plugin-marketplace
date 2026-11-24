from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of post content"""

    LINK = "link"
    STATUS = "status"
    PHOTO = "photo"
    VIDEO = "video"
    OFFER = "offer"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
