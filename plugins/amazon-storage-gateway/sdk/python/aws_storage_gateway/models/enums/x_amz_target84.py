from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget84(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_SMB_SECURITY_STRATEGY = "StorageGateway_20130630.UpdateSMBSecurityStrategy"

    __str__ = str.__str__


XAmzTarget84OrStr: TypeAlias = Annotated[XAmzTarget84 | str, open_enum_validator(XAmzTarget84)]
