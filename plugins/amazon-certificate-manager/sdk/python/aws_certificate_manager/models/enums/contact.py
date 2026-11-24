from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Contact(str, Enum):
    """Whether ACME clients must provide contact information during account registration."""

    REQUIRED = "REQUIRED"
    NOT_REQUIRED = "NOT_REQUIRED"

    __str__ = str.__str__


ContactOrStr: TypeAlias = Annotated[Contact | str, open_enum_validator(Contact)]
