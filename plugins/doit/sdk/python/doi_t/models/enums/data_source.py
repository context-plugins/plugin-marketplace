from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSource(str, Enum):
    """Data source used to query data for the alert. Affects which dimensions and metrics are available."""

    BILLING = "billing"
    BILLING_DATAHUB = "billing-datahub"
    KUBERNETES_UTILIZATION = "kubernetes-utilization"
    TOKENOMICS = "tokenomics"

    __str__ = str.__str__


DataSourceOrStr: TypeAlias = Annotated[DataSource | str, open_enum_validator(DataSource)]
