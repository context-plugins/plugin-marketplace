from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonDevOpsGuruInsightsApi(str, Enum):
    """Use to filter for either REACTIVE or PROACTIVE insights."""

    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"

    __str__ = str.__str__


TypeAmazonDevOpsGuruInsightsApiOrStr: TypeAlias = Annotated[
    TypeAmazonDevOpsGuruInsightsApi | str, open_enum_validator(TypeAmazonDevOpsGuruInsightsApi)
]
