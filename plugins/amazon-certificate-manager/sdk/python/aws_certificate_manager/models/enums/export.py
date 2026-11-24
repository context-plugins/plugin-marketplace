from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Export(str, Enum):
    """You can opt in to allow the export of your certificates by specifying ENABLED. You cannot update the value of
    Export after the the certificate is created."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


ExportOrStr: TypeAlias = Annotated[Export | str, open_enum_validator(Export)]
