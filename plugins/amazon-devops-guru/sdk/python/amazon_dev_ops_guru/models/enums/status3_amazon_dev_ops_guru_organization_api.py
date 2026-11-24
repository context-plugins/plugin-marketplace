from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3AmazonDevOpsGuruOrganizationApi(str, Enum):
    """The status of a reactive insight."""

    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

    __str__ = str.__str__


Status3AmazonDevOpsGuruOrganizationApiOrStr: TypeAlias = Annotated[
    Status3AmazonDevOpsGuruOrganizationApi | str, open_enum_validator(Status3AmazonDevOpsGuruOrganizationApi)
]
