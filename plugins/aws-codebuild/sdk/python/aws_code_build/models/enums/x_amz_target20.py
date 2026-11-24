from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20(str, Enum):
    CODE_BUILD_20161006_DELETE_BUILD_BATCH = "CodeBuild_20161006.DeleteBuildBatch"

    __str__ = str.__str__


XAmzTarget20OrStr: TypeAlias = Annotated[XAmzTarget20 | str, open_enum_validator(XAmzTarget20)]
