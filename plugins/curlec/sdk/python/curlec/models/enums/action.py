from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action(str, Enum):
    """draft: save evidence without submitting. submit: send for bank review. Minimum one document required for
    submit."""

    DRAFT = "draft"
    SUBMIT = "submit"

    __str__ = str.__str__


ActionOrStr: TypeAlias = Annotated[Action | str, open_enum_validator(Action)]
