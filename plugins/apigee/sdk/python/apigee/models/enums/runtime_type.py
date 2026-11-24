from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuntimeType(str, Enum):
    """Required. Runtime type of the Apigee organization based on the Apigee subscription purchased."""

    RUNTIME_TYPE_UNSPECIFIED = "RUNTIME_TYPE_UNSPECIFIED"
    CLOUD = "CLOUD"
    HYBRID = "HYBRID"

    __str__ = str.__str__


RuntimeTypeOrStr: TypeAlias = Annotated[RuntimeType | str, open_enum_validator(RuntimeType)]
