from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FolderType(str, Enum):
    """Type classification of the folder"""

    STANDARD = "Standard"
    PERSONAL = "Personal"

    __str__ = str.__str__


FolderTypeOrStr: TypeAlias = Annotated[FolderType | str, open_enum_validator(FolderType)]
