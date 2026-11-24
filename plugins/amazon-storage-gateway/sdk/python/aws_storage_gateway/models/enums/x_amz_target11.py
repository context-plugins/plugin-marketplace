from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    STORAGE_GATEWAY_20130630_ADD_TAGS_TO_RESOURCE = "StorageGateway_20130630.AddTagsToResource"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
