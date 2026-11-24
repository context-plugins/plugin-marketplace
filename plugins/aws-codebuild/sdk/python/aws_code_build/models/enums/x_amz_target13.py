from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget13(str, Enum):
    CODE_BUILD_20161006_LIST_REPORT_GROUPS = "CodeBuild_20161006.ListReportGroups"

    __str__ = str.__str__


XAmzTarget13OrStr: TypeAlias = Annotated[XAmzTarget13 | str, open_enum_validator(XAmzTarget13)]
