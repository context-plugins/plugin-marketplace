from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InspectionLevel(str, Enum):
    """Determines the values to return when a state is tested. You can specify one of the following types: INFO: Shows
    the final state output. By default, Step Functions sets inspectionLevel to INFO if you don't specify a level. DEBUG:
    Shows the final state output along with the input and output data processing result. TRACE: Shows the HTTP request
    and response for an HTTP Task. This level also shows the final state output along with the input and output data
    processing result. Each of these levels also provide information about the status of the state execution and the
    next state to transition to."""

    INFO = "INFO"
    DEBUG = "DEBUG"
    TRACE = "TRACE"

    __str__ = str.__str__


InspectionLevelOrStr: TypeAlias = Annotated[InspectionLevel | str, open_enum_validator(InspectionLevel)]
