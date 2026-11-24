from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name26(str, Enum):
    """The name of the field to use for filtering."""

    SLOT_TYPE_NAME = "SlotTypeName"
    EXTERNAL_SOURCE_TYPE = "ExternalSourceType"

    __str__ = str.__str__


Name26OrStr: TypeAlias = Annotated[Name26 | str, open_enum_validator(Name26)]
