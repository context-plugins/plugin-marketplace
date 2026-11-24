from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityAmazonDevOpsGuruOrganizationApi(str, Enum):
    """An array of severity values used to search for insights. For more information, see Understanding insight
    severities in the Amazon DevOps Guru User Guide."""

    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


SeverityAmazonDevOpsGuruOrganizationApiOrStr: TypeAlias = Annotated[
    SeverityAmazonDevOpsGuruOrganizationApi | str, open_enum_validator(SeverityAmazonDevOpsGuruOrganizationApi)
]
