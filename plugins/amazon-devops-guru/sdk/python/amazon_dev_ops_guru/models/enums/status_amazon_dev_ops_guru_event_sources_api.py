from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonDevOpsGuruEventSourcesApi(str, Enum):
    """The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations
    that are generated from Amazon CodeGuru Profiler."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


StatusAmazonDevOpsGuruEventSourcesApiOrStr: TypeAlias = Annotated[
    StatusAmazonDevOpsGuruEventSourcesApi | str, open_enum_validator(StatusAmazonDevOpsGuruEventSourcesApi)
]
