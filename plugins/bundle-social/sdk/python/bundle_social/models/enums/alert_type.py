from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AlertType(str, Enum):
    """Alert type for ALERT posts."""

    COVID_19 = "COVID_19"

    __str__ = str.__str__


AlertTypeOrStr: TypeAlias = Annotated[AlertType | str, open_enum_validator(AlertType)]
