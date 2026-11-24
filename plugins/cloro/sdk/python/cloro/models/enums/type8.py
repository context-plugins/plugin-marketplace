from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type8(str, Enum):
    """The control that ChatGPT shows for the question."""

    RADIO = "radio"
    CHECKBOX = "checkbox"
    SELECT = "select"
    TEXT = "text"
    TEXTAREA = "textarea"
    DATE = "date"

    __str__ = str.__str__


Type8OrStr: TypeAlias = Annotated[Type8 | str, open_enum_validator(Type8)]
