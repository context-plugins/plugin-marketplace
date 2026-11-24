from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsCodeBuildProjectsApi(str, Enum):
    """The status of the webhook. Valid values include: CREATING: The webhook is being created. CREATE_FAILED: The
    webhook has failed to create. ACTIVE: The webhook has succeeded and is active. DELETING: The webhook is being
    deleted."""

    CREATING = "CREATING"
    CREATE_FAILED = "CREATE_FAILED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

    __str__ = str.__str__


StatusAwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    StatusAwsCodeBuildProjectsApi | str, open_enum_validator(StatusAwsCodeBuildProjectsApi)
]
