from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PurchaseSource1(str, Enum):
    WEB = "web"
    API = "api"

    __str__ = str.__str__


PurchaseSource1OrStr: TypeAlias = Annotated[PurchaseSource1 | str, open_enum_validator(PurchaseSource1)]
