from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT = "StorageGateway_20130630.RetrieveTapeRecoveryPoint"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
