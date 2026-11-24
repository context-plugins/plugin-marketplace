from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortGroups(str, Enum):
    """Orders the rows produced by ``group``, both in the console and in a rendered ``fileOutput`` export. ``a_to_z``
    orders them by the dimension value, ``asc``/``desc`` by the metric. It does not reorder the ``rows`` of a JSON
    result."""

    ASC = "asc"
    DESC = "desc"
    A_TO_Z = "a_to_z"

    __str__ = str.__str__


SortGroupsOrStr: TypeAlias = Annotated[SortGroups | str, open_enum_validator(SortGroups)]
