from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonDevOpsGuruCostEstimationApi(str, Enum):
    """The status of creating this cost estimate. If it's still in progress, the status ONGOING is returned. If it is
    finished, the status COMPLETED is returned."""

    ONGOING = "ONGOING"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StatusAmazonDevOpsGuruCostEstimationApiOrStr: TypeAlias = Annotated[
    StatusAmazonDevOpsGuruCostEstimationApi | str, open_enum_validator(StatusAmazonDevOpsGuruCostEstimationApi)
]
