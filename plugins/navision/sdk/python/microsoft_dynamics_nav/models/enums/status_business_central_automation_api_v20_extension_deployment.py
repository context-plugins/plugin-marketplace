from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBusinessCentralAutomationApiV20ExtensionDeployment(str, Enum):
    """Deployment status"""

    UNKNOWN = "Unknown"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"

    __str__ = str.__str__


StatusBusinessCentralAutomationApiV20ExtensionDeploymentOrStr: TypeAlias = Annotated[
    StatusBusinessCentralAutomationApiV20ExtensionDeployment | str,
    open_enum_validator(StatusBusinessCentralAutomationApiV20ExtensionDeployment),
]
