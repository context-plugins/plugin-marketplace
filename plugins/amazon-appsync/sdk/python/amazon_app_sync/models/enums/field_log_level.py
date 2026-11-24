from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FieldLogLevel(str, Enum):
    """The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are captured. ERROR: Logs
    the following information only for the fields that are in error: The error section in the server response.
    Field-level errors. The generated request/response functions that got resolved for error fields. ALL: The following
    information is logged for all fields in the query: Field-level tracing information. The generated request/response
    functions that got resolved for each field."""

    NONE = "NONE"
    ERROR = "ERROR"
    ALL = "ALL"
    INFO = "INFO"
    DEBUG = "DEBUG"

    __str__ = str.__str__


FieldLogLevelOrStr: TypeAlias = Annotated[FieldLogLevel | str, open_enum_validator(FieldLogLevel)]
