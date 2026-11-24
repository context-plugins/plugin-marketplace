from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget79(str, Enum):
    STORAGE_GATEWAY_20130630_SET_LOCAL_CONSOLE_PASSWORD = "StorageGateway_20130630.SetLocalConsolePassword"

    __str__ = str.__str__


XAmzTarget79OrStr: TypeAlias = Annotated[XAmzTarget79 | str, open_enum_validator(XAmzTarget79)]
