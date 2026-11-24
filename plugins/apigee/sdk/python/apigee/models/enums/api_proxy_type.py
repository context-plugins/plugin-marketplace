from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiProxyType(str, Enum):
    """Output only. The type of the API proxy."""

    API_PROXY_TYPE_UNSPECIFIED = "API_PROXY_TYPE_UNSPECIFIED"
    PROGRAMMABLE = "PROGRAMMABLE"
    CONFIGURABLE = "CONFIGURABLE"

    __str__ = str.__str__


ApiProxyTypeOrStr: TypeAlias = Annotated[ApiProxyType | str, open_enum_validator(ApiProxyType)]
