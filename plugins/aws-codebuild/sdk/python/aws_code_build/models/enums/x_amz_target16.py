from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    CODE_BUILD_20161006_LIST_REPORTS_FOR_REPORT_GROUP = "CodeBuild_20161006.ListReportsForReportGroup"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
