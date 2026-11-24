from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactGroups(int, Enum):
    """1 = Individual 3 = Juristic 9 = Undefined"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_9 = 9

    __str__ = str.__str__


ContactGroupsOrInt: TypeAlias = Annotated[ContactGroups | int, open_enum_validator(ContactGroups)]
