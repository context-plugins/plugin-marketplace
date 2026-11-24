from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """Discriminator for the underlying citation event: ``searchResult`` for inline search citations, ``groupedWebpage``
    for grouped-webpage cards."""

    SEARCH_RESULT = "searchResult"
    GROUPED_WEBPAGE = "groupedWebpage"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
