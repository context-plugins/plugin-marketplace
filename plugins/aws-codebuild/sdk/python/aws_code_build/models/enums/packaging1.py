from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Packaging1(str, Enum):
    """The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the raw data in the
    output bucket. This is the default if packaging is not specified. ZIP: CodeBuild creates a ZIP file with the raw
    data in the output bucket."""

    ZIP = "ZIP"
    NONE = "NONE"

    __str__ = str.__str__


Packaging1OrStr: TypeAlias = Annotated[Packaging1 | str, open_enum_validator(Packaging1)]
