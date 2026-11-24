from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget30(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_SMB_FILE_SHARES = "StorageGateway_20130630.DescribeSMBFileShares"

    __str__ = str.__str__


XAmzTarget30OrStr: TypeAlias = Annotated[XAmzTarget30 | str, open_enum_validator(XAmzTarget30)]
