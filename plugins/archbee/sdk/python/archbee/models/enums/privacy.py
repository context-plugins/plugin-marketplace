from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Privacy(str, Enum):
    """describes how to access the document via public url (if published)"""

    PRIVATE = "private"
    SHARED_WITH_TEAM = "shared with team"
    PUBLIC_VIA_LINK = "public-via-link"
    PUBLIC = "public"

    __str__ = str.__str__


PrivacyOrStr: TypeAlias = Annotated[Privacy | str, open_enum_validator(Privacy)]
