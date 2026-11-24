from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9(str, Enum):
    OVERTURE_SERVICE_CONFIRM_CONNECTION = "OvertureService.ConfirmConnection"

    __str__ = str.__str__


XAmzTarget9OrStr: TypeAlias = Annotated[XAmzTarget9 | str, open_enum_validator(XAmzTarget9)]
