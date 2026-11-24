from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Label(str, Enum):
    NO_UNAUTHENTICATED = "!no-unauthenticated"
    PORN = "porn"
    SEXUAL = "sexual"
    NUDITY = "nudity"
    GRAPHIC_MEDIA = "graphic-media"

    __str__ = str.__str__


LabelOrStr: TypeAlias = Annotated[Label | str, open_enum_validator(Label)]
