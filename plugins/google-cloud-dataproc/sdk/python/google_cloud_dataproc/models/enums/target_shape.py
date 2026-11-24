from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TargetShape(str, Enum):
    """Optional. The distribution shape of the nodes in the multi-zonal cluster."""

    TARGET_SHAPE_UNSPECIFIED = "TARGET_SHAPE_UNSPECIFIED"
    ANY = "ANY"

    __str__ = str.__str__


TargetShapeOrStr: TypeAlias = Annotated[TargetShape | str, open_enum_validator(TargetShape)]
