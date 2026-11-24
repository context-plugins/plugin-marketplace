from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_GATEWAY_INFORMATION = "StorageGateway_20130630.DescribeGatewayInformation"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
