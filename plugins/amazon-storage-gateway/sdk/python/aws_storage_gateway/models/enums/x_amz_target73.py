from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget73(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_SMB_SETTINGS = "StorageGateway_20130630.DescribeSMBSettings"

    __str__ = str.__str__


XAmzTarget73OrStr: TypeAlias = Annotated[XAmzTarget73 | str, open_enum_validator(XAmzTarget73)]
