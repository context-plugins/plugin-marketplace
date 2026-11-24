from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget80(str, Enum):
    STORAGE_GATEWAY_20130630_SET_SMB_GUEST_PASSWORD = "StorageGateway_20130630.SetSMBGuestPassword"

    __str__ = str.__str__


XAmzTarget80OrStr: TypeAlias = Annotated[XAmzTarget80 | str, open_enum_validator(XAmzTarget80)]
