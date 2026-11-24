from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptInStatus(str, Enum):
    """Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
    insight."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


OptInStatusOrStr: TypeAlias = Annotated[OptInStatus | str, open_enum_validator(OptInStatus)]
