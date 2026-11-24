from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AwsCodeBuildProjectsApi(str, Enum):
    """The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED: CloudWatch Logs
    are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for this build project."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


Status1AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    Status1AwsCodeBuildProjectsApi | str, open_enum_validator(Status1AwsCodeBuildProjectsApi)
]
