from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsCodeBuildFleetApi(str, Enum):
    """The type of proxy rule."""

    DOMAIN = "DOMAIN"
    IP = "IP"

    __str__ = str.__str__


TypeAwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    TypeAwsCodeBuildFleetApi | str, open_enum_validator(TypeAwsCodeBuildFleetApi)
]
