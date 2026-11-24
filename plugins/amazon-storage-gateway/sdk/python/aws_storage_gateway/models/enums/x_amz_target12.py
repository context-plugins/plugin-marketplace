from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_TAGS_FOR_RESOURCE = "StorageGateway_20130630.ListTagsForResource"

    __str__ = str.__str__


XAmzTarget12OrStr: TypeAlias = Annotated[XAmzTarget12 | str, open_enum_validator(XAmzTarget12)]
