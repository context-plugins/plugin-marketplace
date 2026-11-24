from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget58(str, Enum):
    OVERTURE_SERVICE_START_BGP_FAILOVER_TEST = "OvertureService.StartBgpFailoverTest"

    __str__ = str.__str__


XAmzTarget58OrStr: TypeAlias = Annotated[XAmzTarget58 | str, open_enum_validator(XAmzTarget58)]
