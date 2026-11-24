from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget35(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_STOREDI_SCSI_VOLUMES = "StorageGateway_20130630.DescribeStorediSCSIVolumes"

    __str__ = str.__str__


XAmzTarget35OrStr: TypeAlias = Annotated[XAmzTarget35 | str, open_enum_validator(XAmzTarget35)]
