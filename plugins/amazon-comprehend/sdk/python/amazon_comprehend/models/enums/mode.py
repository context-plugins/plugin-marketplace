from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    """Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class
    (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and
    multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document
    are separated by a delimiter. The default delimiter between labels is a pipe (|)."""

    MULTI_CLASS = "MULTI_CLASS"
    MULTI_LABEL = "MULTI_LABEL"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
