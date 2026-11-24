from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12(str, Enum):
    CODE_BUILD_20161006_DELETE_REPORT_GROUP = "CodeBuild_20161006.DeleteReportGroup"

    __str__ = str.__str__


XAmzTarget12OrStr: TypeAlias = Annotated[XAmzTarget12 | str, open_enum_validator(XAmzTarget12)]
