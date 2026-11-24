from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feature1(str, Enum):
    CONTENT_MODERATION = "CONTENT_MODERATION"
    CUSTOM_LABELS = "CUSTOM_LABELS"

    __str__ = str.__str__


Feature1OrStr: TypeAlias = Annotated[Feature1 | str, open_enum_validator(Feature1)]
