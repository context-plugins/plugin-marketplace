from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget37(str, Enum):
    CODE_BUILD_20161006_UPDATE_PROJECT_VISIBILITY = "CodeBuild_20161006.UpdateProjectVisibility"

    __str__ = str.__str__


XAmzTarget37OrStr: TypeAlias = Annotated[XAmzTarget37 | str, open_enum_validator(XAmzTarget37)]
