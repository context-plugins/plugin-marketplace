from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ListApi(str, Enum):
    """The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine
    the right API to use."""

    LIST_API_UNSPECIFIED = "LIST_API_UNSPECIFIED"
    LIST_OBJECTS_V2 = "LIST_OBJECTS_V2"
    LIST_OBJECTS = "LIST_OBJECTS"

    __str__ = str.__str__


ListApiOrStr: TypeAlias = Annotated[ListApi | str, open_enum_validator(ListApi)]
