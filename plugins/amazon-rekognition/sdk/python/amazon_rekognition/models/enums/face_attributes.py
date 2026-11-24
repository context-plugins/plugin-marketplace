from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FaceAttributes(str, Enum):
    """The face attributes you want returned. DEFAULT - The following subset of facial attributes are returned:
    BoundingBox, Confidence, Pose, Quality and Landmarks. ALL - All facial attributes are returned."""

    DEFAULT = "DEFAULT"
    ALL = "ALL"

    __str__ = str.__str__


FaceAttributesOrStr: TypeAlias = Annotated[FaceAttributes | str, open_enum_validator(FaceAttributes)]
