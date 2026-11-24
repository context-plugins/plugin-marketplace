from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget31(str, Enum):
    CODE_BUILD_20161006_GET_REPORT_GROUP_TREND = "CodeBuild_20161006.GetReportGroupTrend"

    __str__ = str.__str__


XAmzTarget31OrStr: TypeAlias = Annotated[XAmzTarget31 | str, open_enum_validator(XAmzTarget31)]
