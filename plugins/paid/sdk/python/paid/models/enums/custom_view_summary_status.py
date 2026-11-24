from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewSummaryStatus(str, Enum):
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


CustomViewSummaryStatusOrStr: TypeAlias = Annotated[
    CustomViewSummaryStatus | str, open_enum_validator(CustomViewSummaryStatus)
]
