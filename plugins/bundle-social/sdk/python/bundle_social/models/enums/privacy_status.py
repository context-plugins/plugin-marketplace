from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PrivacyStatus(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

    __str__ = str.__str__


PrivacyStatusOrStr: TypeAlias = Annotated[PrivacyStatus | str, open_enum_validator(PrivacyStatus)]
