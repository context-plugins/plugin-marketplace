from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCallnodeIoOutboundCallsApi(str, Enum):
    NONE = "none"
    BASIC = "basic"
    BEARER = "bearer"
    HEADER = "header"

    __str__ = str.__str__


TypeCallnodeIoOutboundCallsApiOrStr: TypeAlias = Annotated[
    TypeCallnodeIoOutboundCallsApi | str, open_enum_validator(TypeCallnodeIoOutboundCallsApi)
]
