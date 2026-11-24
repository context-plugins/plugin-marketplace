from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Required. Type of this resource."""

    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    API_PROXY = "API_PROXY"
    API_HUB_DEPLOYMENT = "API_HUB_DEPLOYMENT"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
