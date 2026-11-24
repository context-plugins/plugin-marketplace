from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSource1(str, Enum):
    """Omission preserves the saved data source. Tokenomics requires customer enablement."""

    BILLING = "billing"
    BILLING_DATAHUB = "billing-datahub"
    KUBERNETES_UTILIZATION = "kubernetes-utilization"
    TOKENOMICS = "tokenomics"

    __str__ = str.__str__


DataSource1OrStr: TypeAlias = Annotated[DataSource1 | str, open_enum_validator(DataSource1)]
