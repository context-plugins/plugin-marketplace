from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CldType(str, Enum):
    """Cloud account type."""

    AWS = "AWS"
    GCP = "GCP"
    AZURE = "AZURE"

    __str__ = str.__str__


CldTypeOrStr: TypeAlias = Annotated[CldType | str, open_enum_validator(CldType)]
