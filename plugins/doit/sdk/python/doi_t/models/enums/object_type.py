from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectType(str, Enum):
    """The type of the object."""

    ALERT = "alert"
    ALLOCATION = "allocation"
    BUDGET = "budget"
    METRIC = "metric"
    REPORT = "report"
    ANNOTATION = "annotation"

    __str__ = str.__str__


ObjectTypeOrStr: TypeAlias = Annotated[ObjectType | str, open_enum_validator(ObjectType)]
