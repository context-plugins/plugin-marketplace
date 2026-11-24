from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget35(str, Enum):
    CODE_BUILD_20161006_LIST_SHARED_PROJECTS = "CodeBuild_20161006.ListSharedProjects"

    __str__ = str.__str__


XAmzTarget35OrStr: TypeAlias = Annotated[XAmzTarget35 | str, open_enum_validator(XAmzTarget35)]
