from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonDevOpsGuruOrganizationApi(str, Enum):
    """An array of status values used to search for insights."""

    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

    __str__ = str.__str__


StatusAmazonDevOpsGuruOrganizationApiOrStr: TypeAlias = Annotated[
    StatusAmazonDevOpsGuruOrganizationApi | str, open_enum_validator(StatusAmazonDevOpsGuruOrganizationApi)
]
