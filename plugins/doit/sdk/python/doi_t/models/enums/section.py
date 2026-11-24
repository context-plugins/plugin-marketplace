from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Section(str, Enum):
    CONNECTIONS = "connections"
    DATASTORE_TABLES = "datastoreTables"
    GLOBAL_VARIABLES = "globalVariables"

    __str__ = str.__str__


SectionOrStr: TypeAlias = Annotated[Section | str, open_enum_validator(Section)]
