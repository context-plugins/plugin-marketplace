from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    CODE_BUILD_20161006_CREATE_REPORT_GROUP = "CodeBuild_20161006.CreateReportGroup"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
