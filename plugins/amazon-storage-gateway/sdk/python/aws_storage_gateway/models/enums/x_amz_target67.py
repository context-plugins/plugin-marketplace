from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget67(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_FILE_SYSTEM_ASSOCIATIONS = "StorageGateway_20130630.DescribeFileSystemAssociations"

    __str__ = str.__str__


XAmzTarget67OrStr: TypeAlias = Annotated[XAmzTarget67 | str, open_enum_validator(XAmzTarget67)]
