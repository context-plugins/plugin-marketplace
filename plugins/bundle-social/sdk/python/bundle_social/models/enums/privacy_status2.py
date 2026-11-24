from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PrivacyStatus2(str, Enum):
    """The updated privacy status"""

    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

    __str__ = str.__str__


PrivacyStatus2OrStr: TypeAlias = Annotated[PrivacyStatus2 | str, open_enum_validator(PrivacyStatus2)]
