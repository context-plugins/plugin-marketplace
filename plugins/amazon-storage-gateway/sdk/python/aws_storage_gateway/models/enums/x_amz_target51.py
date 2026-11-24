from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget51(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_CHAP_CREDENTIALS = "StorageGateway_20130630.DescribeChapCredentials"

    __str__ = str.__str__


XAmzTarget51OrStr: TypeAlias = Annotated[XAmzTarget51 | str, open_enum_validator(XAmzTarget51)]
