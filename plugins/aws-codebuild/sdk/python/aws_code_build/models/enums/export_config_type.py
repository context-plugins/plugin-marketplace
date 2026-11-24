from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportConfigType(str, Enum):
    """The export configuration type. Valid values are: S3: The report results are exported to an S3 bucket. NO_EXPORT:
    The report results are not exported."""

    S3 = "S3"
    NO_EXPORT = "NO_EXPORT"

    __str__ = str.__str__


ExportConfigTypeOrStr: TypeAlias = Annotated[ExportConfigType | str, open_enum_validator(ExportConfigType)]
