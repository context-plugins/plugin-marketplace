from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTCloudDiagramsApi(str, Enum):
    """Component type."""

    ATTACHMENT = "attachment"
    COMBINER = "combiner"
    ELEMENT = "element"
    GROUP = "group"
    LINK = "link"
    NODE = "node"
    NOTE = "note"
    SCHEME = "scheme"
    STATUSSHEET = "statussheet"

    __str__ = str.__str__


TypeDoiTCloudDiagramsApiOrStr: TypeAlias = Annotated[
    TypeDoiTCloudDiagramsApi | str, open_enum_validator(TypeDoiTCloudDiagramsApi)
]
