from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget10(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_REPORT_GROUPS = "CodeBuild_20161006.BatchGetReportGroups"

    __str__ = str.__str__


XAmzTarget10OrStr: TypeAlias = Annotated[XAmzTarget10 | str, open_enum_validator(XAmzTarget10)]
