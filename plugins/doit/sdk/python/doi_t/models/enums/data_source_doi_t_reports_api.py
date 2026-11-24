from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSourceDoiTReportsApi(str, Enum):
    """Data source of the report."""

    BILLING = "billing"
    BQLENS = "bqlens"
    BILLING_DATAHUB = "billing-datahub"
    KUBERNETES_UTILIZATION = "kubernetes-utilization"

    __str__ = str.__str__


DataSourceDoiTReportsApiOrStr: TypeAlias = Annotated[
    DataSourceDoiTReportsApi | str, open_enum_validator(DataSourceDoiTReportsApi)
]
