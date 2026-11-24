from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service1DoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Product line this onboarding status belongs to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service1DoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    Service1DoiTPerfectScaleForCommitmentsGcpApi | str,
    open_enum_validator(Service1DoiTPerfectScaleForCommitmentsGcpApi),
]
