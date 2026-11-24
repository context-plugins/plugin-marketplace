from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_REPORTS = "CodeBuild_20161006.BatchGetReports"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
