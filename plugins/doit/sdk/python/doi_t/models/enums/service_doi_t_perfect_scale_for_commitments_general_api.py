from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceDoiTPerfectScaleForCommitmentsGeneralApi(str, Enum):
    """Product line the policy applies to. ``compute`` and ``database`` are AWS Savings Plan lines (GCP also has
    ``compute``); ``cloud_sql`` is GCP only."""

    COMPUTE = "compute"
    DATABASE = "database"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


ServiceDoiTPerfectScaleForCommitmentsGeneralApiOrStr: TypeAlias = Annotated[
    ServiceDoiTPerfectScaleForCommitmentsGeneralApi | str,
    open_enum_validator(ServiceDoiTPerfectScaleForCommitmentsGeneralApi),
]
