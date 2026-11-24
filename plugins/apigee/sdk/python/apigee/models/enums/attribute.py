from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute(str, Enum):
    """Required. The attribute the user is providing feedback about."""

    ATTRIBUTE_UNSPECIFIED = "ATTRIBUTE_UNSPECIFIED"
    ATTRIBUTE_ENVIRONMENTS = "ATTRIBUTE_ENVIRONMENTS"
    ATTRIBUTE_IP_ADDRESS_RANGES = "ATTRIBUTE_IP_ADDRESS_RANGES"

    __str__ = str.__str__


AttributeOrStr: TypeAlias = Annotated[Attribute | str, open_enum_validator(Attribute)]
