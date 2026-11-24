from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportType(str, Enum):
    """The format of the exported data."""

    ALEXA_SKILLS_KIT = "ALEXA_SKILLS_KIT"
    LEX = "LEX"

    __str__ = str.__str__


ExportTypeOrStr: TypeAlias = Annotated[ExportType | str, open_enum_validator(ExportType)]
