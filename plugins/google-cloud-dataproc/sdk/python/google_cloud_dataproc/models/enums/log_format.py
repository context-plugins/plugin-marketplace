from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogFormat(str, Enum):
    """Optional. The output format of the Dataproc Metastore service's logs."""

    LOG_FORMAT_UNSPECIFIED = "LOG_FORMAT_UNSPECIFIED"
    LEGACY = "LEGACY"
    JSON = "JSON"

    __str__ = str.__str__


LogFormatOrStr: TypeAlias = Annotated[LogFormat | str, open_enum_validator(LogFormat)]
