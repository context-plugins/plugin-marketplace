from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget45(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_AUTOMATIC_TAPE_CREATION_POLICIES = "StorageGateway_20130630.ListAutomaticTapeCreationPolicies"

    __str__ = str.__str__


XAmzTarget45OrStr: TypeAlias = Annotated[XAmzTarget45 | str, open_enum_validator(XAmzTarget45)]
