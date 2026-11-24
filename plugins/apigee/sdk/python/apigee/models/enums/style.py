from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Style(str, Enum):
    """Optional. Style of ApiObservation"""

    STYLE_UNSPECIFIED = "STYLE_UNSPECIFIED"
    REST = "REST"
    GRPC = "GRPC"
    GRAPHQL = "GRAPHQL"

    __str__ = str.__str__


StyleOrStr: TypeAlias = Annotated[Style | str, open_enum_validator(Style)]
