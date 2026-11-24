from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget29(str, Enum):
    OVERTURE_SERVICE_DELETE_BGP_PEER = "OvertureService.DeleteBGPPeer"

    __str__ = str.__str__


XAmzTarget29OrStr: TypeAlias = Annotated[XAmzTarget29 | str, open_enum_validator(XAmzTarget29)]
