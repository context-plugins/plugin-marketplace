from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feature2(str, Enum):
    """Specifies the project that is being customized."""

    CONTENT_MODERATION = "CONTENT_MODERATION"
    CUSTOM_LABELS = "CUSTOM_LABELS"

    __str__ = str.__str__


Feature2OrStr: TypeAlias = Annotated[Feature2 | str, open_enum_validator(Feature2)]
