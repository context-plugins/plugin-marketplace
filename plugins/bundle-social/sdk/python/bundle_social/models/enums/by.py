from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class By(str, Enum):
    """How the list was resolved. ``category`` means your ``regionCode``/``languageCode`` were applied; ``location``
    means they could not be (the location has no primary category or no region code, which is common for service-area
    businesses) and the attributes are the location's defaults instead."""

    CATEGORY = "category"
    LOCATION = "location"

    __str__ = str.__str__


ByOrStr: TypeAlias = Annotated[By | str, open_enum_validator(By)]
