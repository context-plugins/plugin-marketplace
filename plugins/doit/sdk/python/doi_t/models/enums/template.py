from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Template(str, Enum):
    COMPONENT = "component"
    STATUSSHEET = "statussheet"

    __str__ = str.__str__


TemplateOrStr: TypeAlias = Annotated[Template | str, open_enum_validator(Template)]
