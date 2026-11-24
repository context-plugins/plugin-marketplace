from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAlphaiTruncated(str, Enum):
    ROW_CAP = "row_cap"
    ARCHIVE_HORIZON = "archive_horizon"
    FALSE = "false"

    __str__ = str.__str__


XAlphaiTruncatedOrStr: TypeAlias = Annotated[XAlphaiTruncated | str, open_enum_validator(XAlphaiTruncated)]
