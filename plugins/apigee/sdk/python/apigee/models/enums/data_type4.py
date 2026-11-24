from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType4(str, Enum):
    """Required. Type of data to be managed."""

    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    PROXY_DEPLOYMENT_MANIFEST = "PROXY_DEPLOYMENT_MANIFEST"
    ENVIRONMENT_MANIFEST = "ENVIRONMENT_MANIFEST"
    PROXY_BUNDLE = "PROXY_BUNDLE"
    SHARED_FLOW_BUNDLE = "SHARED_FLOW_BUNDLE"

    __str__ = str.__str__


DataType4OrStr: TypeAlias = Annotated[DataType4 | str, open_enum_validator(DataType4)]
