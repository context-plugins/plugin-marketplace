from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiProxyType1(str, Enum):
    """Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and
    cannot be changed."""

    API_PROXY_TYPE_UNSPECIFIED = "API_PROXY_TYPE_UNSPECIFIED"
    PROGRAMMABLE = "PROGRAMMABLE"
    CONFIGURABLE = "CONFIGURABLE"

    __str__ = str.__str__


ApiProxyType1OrStr: TypeAlias = Annotated[ApiProxyType1 | str, open_enum_validator(ApiProxyType1)]
