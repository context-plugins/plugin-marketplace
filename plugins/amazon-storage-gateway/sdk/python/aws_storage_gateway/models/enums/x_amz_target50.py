from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget50(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_CHAP_CREDENTIALS = "StorageGateway_20130630.DeleteChapCredentials"

    __str__ = str.__str__


XAmzTarget50OrStr: TypeAlias = Annotated[XAmzTarget50 | str, open_enum_validator(XAmzTarget50)]
