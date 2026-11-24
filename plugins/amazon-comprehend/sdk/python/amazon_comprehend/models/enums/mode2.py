from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode2(str, Enum):
    """Indicates the mode in which the specific classifier was trained. This also indicates the format of input
    documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be
    changed once the classifier is trained."""

    MULTI_CLASS = "MULTI_CLASS"
    MULTI_LABEL = "MULTI_LABEL"

    __str__ = str.__str__


Mode2OrStr: TypeAlias = Annotated[Mode2 | str, open_enum_validator(Mode2)]
