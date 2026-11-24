from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiffMode1(str, Enum):
    """How changes are detected. Default ``both`` = a pixel diff (with a highlighted overlay) AND a full-page text diff,
    alerting on either — catches any change, visual or text. ``visual`` or ``text`` narrow to a single signal.
    (``text``/``both`` extract the full visible page text, not just the article body.)"""

    VISUAL = "visual"
    TEXT = "text"
    BOTH = "both"

    __str__ = str.__str__


DiffMode1OrStr: TypeAlias = Annotated[DiffMode1 | str, open_enum_validator(DiffMode1)]
