from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget27(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_NFS_FILE_SHARES = "StorageGateway_20130630.DescribeNFSFileShares"

    __str__ = str.__str__


XAmzTarget27OrStr: TypeAlias = Annotated[XAmzTarget27 | str, open_enum_validator(XAmzTarget27)]
