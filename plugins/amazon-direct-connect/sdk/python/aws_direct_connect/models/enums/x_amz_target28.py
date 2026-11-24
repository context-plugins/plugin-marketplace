from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget28(str, Enum):
    OVERTURE_SERVICE_CREATE_BGP_PEER = "OvertureService.CreateBGPPeer"

    __str__ = str.__str__


XAmzTarget28OrStr: TypeAlias = Annotated[XAmzTarget28 | str, open_enum_validator(XAmzTarget28)]
