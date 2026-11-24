from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service2DoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Product line these savings totals belong to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service2DoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    Service2DoiTPerfectScaleForCommitmentsGcpApi | str,
    open_enum_validator(Service2DoiTPerfectScaleForCommitmentsGcpApi),
]
