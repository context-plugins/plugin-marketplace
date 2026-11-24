from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget36(str, Enum):
    CODE_BUILD_20161006_LIST_SHARED_REPORT_GROUPS = "CodeBuild_20161006.ListSharedReportGroups"

    __str__ = str.__str__


XAmzTarget36OrStr: TypeAlias = Annotated[XAmzTarget36 | str, open_enum_validator(XAmzTarget36)]
