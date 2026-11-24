from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_PROJECTS = "CodeBuild_20161006.BatchGetProjects"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
