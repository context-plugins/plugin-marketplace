from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactType(str, Enum):
    INDIVIDUAL = "individual"
    COMPANY = "company"

    __str__ = str.__str__


ContactTypeOrStr: TypeAlias = Annotated[ContactType | str, open_enum_validator(ContactType)]
