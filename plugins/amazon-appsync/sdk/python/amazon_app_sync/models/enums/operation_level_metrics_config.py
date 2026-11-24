from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OperationLevelMetricsConfig(str, Enum):
    """Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of
    times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a
    specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED
    or DISABLED."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


OperationLevelMetricsConfigOrStr: TypeAlias = Annotated[
    OperationLevelMetricsConfig | str, open_enum_validator(OperationLevelMetricsConfig)
]
