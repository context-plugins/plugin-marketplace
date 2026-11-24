from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Delivery(str, Enum):
    INLINE = "inline"
    EMAIL = "email"
    DOWNLOAD = "download"

    __str__ = str.__str__


DeliveryOrStr: TypeAlias = Annotated[Delivery | str, open_enum_validator(Delivery)]
