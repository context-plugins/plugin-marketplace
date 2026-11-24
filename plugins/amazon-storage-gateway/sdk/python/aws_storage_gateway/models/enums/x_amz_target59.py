from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget59(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_SNAPSHOT_SCHEDULE = "StorageGateway_20130630.DescribeSnapshotSchedule"

    __str__ = str.__str__


XAmzTarget59OrStr: TypeAlias = Annotated[XAmzTarget59 | str, open_enum_validator(XAmzTarget59)]
