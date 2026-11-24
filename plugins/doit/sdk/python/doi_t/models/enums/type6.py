from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6(str, Enum):
    """Connected cloud account type."""

    AWS = "AWS"
    GCP = "GCP"
    AZURE = "AZURE"

    __str__ = str.__str__


Type6OrStr: TypeAlias = Annotated[Type6 | str, open_enum_validator(Type6)]
