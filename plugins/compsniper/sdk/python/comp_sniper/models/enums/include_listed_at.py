from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludeListedAt(str, Enum):
    """true = add listedAt (the date Mercari shows as "Posted", ISO 8601 UTC) to each result. Slower: each listing is
    looked up separately. null when a date cannot be read."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


IncludeListedAtOrStr: TypeAlias = Annotated[IncludeListedAt | str, open_enum_validator(IncludeListedAt)]
