from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityAmazonDevOpsGuruChannelsApi(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


SeverityAmazonDevOpsGuruChannelsApiOrStr: TypeAlias = Annotated[
    SeverityAmazonDevOpsGuruChannelsApi | str, open_enum_validator(SeverityAmazonDevOpsGuruChannelsApi)
]
