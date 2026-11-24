from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TemplateFont(int, Enum):
    """1 = ChatThai 3 = Rsu"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


TemplateFontOrInt: TypeAlias = Annotated[TemplateFont | int, open_enum_validator(TemplateFont)]
