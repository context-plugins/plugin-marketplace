from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    CODE_BUILD_20161006_LIST_BUILD_BATCHES = "CodeBuild_20161006.ListBuildBatches"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
