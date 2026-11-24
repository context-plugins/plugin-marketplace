from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget59(str, Enum):
    OVERTURE_SERVICE_STOP_BGP_FAILOVER_TEST = "OvertureService.StopBgpFailoverTest"

    __str__ = str.__str__


XAmzTarget59OrStr: TypeAlias = Annotated[XAmzTarget59 | str, open_enum_validator(XAmzTarget59)]
