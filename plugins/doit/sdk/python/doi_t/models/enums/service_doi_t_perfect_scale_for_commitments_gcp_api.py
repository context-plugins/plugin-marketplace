from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceDoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    """Product line these metrics belong to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


ServiceDoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    ServiceDoiTPerfectScaleForCommitmentsGcpApi | str, open_enum_validator(ServiceDoiTPerfectScaleForCommitmentsGcpApi)
]
