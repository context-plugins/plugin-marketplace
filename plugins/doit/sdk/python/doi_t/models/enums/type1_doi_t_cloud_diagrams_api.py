from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1DoiTCloudDiagramsApi(str, Enum):
    """Component bucket the anchor lives in."""

    NODE = "node"
    ELEMENT = "element"
    GROUP = "group"

    __str__ = str.__str__


Type1DoiTCloudDiagramsApiOrStr: TypeAlias = Annotated[
    Type1DoiTCloudDiagramsApi | str, open_enum_validator(Type1DoiTCloudDiagramsApi)
]
