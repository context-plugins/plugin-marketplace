from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_TAGS_FOR_RESOURCE = "AWSStepFunctions.ListTagsForResource"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
