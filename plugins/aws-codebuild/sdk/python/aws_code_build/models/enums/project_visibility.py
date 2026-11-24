from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProjectVisibility(str, Enum):
    PUBLIC_READ = "PUBLIC_READ"
    PRIVATE = "PRIVATE"

    __str__ = str.__str__


ProjectVisibilityOrStr: TypeAlias = Annotated[ProjectVisibility | str, open_enum_validator(ProjectVisibility)]
