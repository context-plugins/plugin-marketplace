from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupKind(str, Enum):
    """Whether the peers were grouped by industry or the broader sector."""

    INDUSTRY = "industry"
    SECTOR = "sector"

    __str__ = str.__str__


GroupKindOrStr: TypeAlias = Annotated[GroupKind | str, open_enum_validator(GroupKind)]
