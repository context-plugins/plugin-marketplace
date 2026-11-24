from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    CODE_BUILD_20161006_START_BUILD_BATCH = "CodeBuild_20161006.StartBuildBatch"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
