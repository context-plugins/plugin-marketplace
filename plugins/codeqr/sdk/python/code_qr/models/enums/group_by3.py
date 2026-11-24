from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupBy3(str, Enum):
    FOLDER_ID = "folderId"

    __str__ = str.__str__


GroupBy3OrStr: TypeAlias = Annotated[GroupBy3 | str, open_enum_validator(GroupBy3)]
