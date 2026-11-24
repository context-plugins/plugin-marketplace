from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget52(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_CHAP_CREDENTIALS = "StorageGateway_20130630.UpdateChapCredentials"

    __str__ = str.__str__


XAmzTarget52OrStr: TypeAlias = Annotated[XAmzTarget52 | str, open_enum_validator(XAmzTarget52)]
