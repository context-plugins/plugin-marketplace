from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TextType(str, Enum):
    """Whether the source text was printed or handwritten"""

    PRINTED = "Printed"
    HANDWRITTEN = "Handwritten"

    __str__ = str.__str__


TextTypeOrStr: TypeAlias = Annotated[TextType | str, open_enum_validator(TextType)]
