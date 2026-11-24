from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Contentdisposition(str, Enum):
    ATTACHMENT = "attachment"

    __str__ = str.__str__


ContentdispositionOrStr: TypeAlias = Annotated[Contentdisposition | str, open_enum_validator(Contentdisposition)]
