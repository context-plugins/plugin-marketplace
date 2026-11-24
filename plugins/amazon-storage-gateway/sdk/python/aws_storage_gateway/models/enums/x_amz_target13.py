from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget13(str, Enum):
    STORAGE_GATEWAY_20130630_REMOVE_TAGS_FROM_RESOURCE = "StorageGateway_20130630.RemoveTagsFromResource"

    __str__ = str.__str__


XAmzTarget13OrStr: TypeAlias = Annotated[XAmzTarget13 | str, open_enum_validator(XAmzTarget13)]
