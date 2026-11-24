from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelSummaryStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


ValueModelSummaryStatusOrStr: TypeAlias = Annotated[
    ValueModelSummaryStatus | str, open_enum_validator(ValueModelSummaryStatus)
]
