from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget34(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_STOREDI_SCSI_VOLUME = "StorageGateway_20130630.CreateStorediSCSIVolume"

    __str__ = str.__str__


XAmzTarget34OrStr: TypeAlias = Annotated[XAmzTarget34 | str, open_enum_validator(XAmzTarget34)]
