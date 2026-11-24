from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget57(str, Enum):
    OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY = "OvertureService.ListVirtualInterfaceTestHistory"

    __str__ = str.__str__


XAmzTarget57OrStr: TypeAlias = Annotated[XAmzTarget57 | str, open_enum_validator(XAmzTarget57)]
