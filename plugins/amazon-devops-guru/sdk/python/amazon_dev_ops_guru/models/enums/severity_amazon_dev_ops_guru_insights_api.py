from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityAmazonDevOpsGuruInsightsApi(str, Enum):
    """The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru
    User Guide."""

    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


SeverityAmazonDevOpsGuruInsightsApiOrStr: TypeAlias = Annotated[
    SeverityAmazonDevOpsGuruInsightsApi | str, open_enum_validator(SeverityAmazonDevOpsGuruInsightsApi)
]
