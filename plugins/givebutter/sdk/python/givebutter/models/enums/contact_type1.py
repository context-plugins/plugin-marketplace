from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactType1(str, Enum):
    """Determines which fields are required: individual contacts require a name, company contacts require
    company_name."""

    INDIVIDUAL = "individual"
    COMPANY = "company"

    __str__ = str.__str__


ContactType1OrStr: TypeAlias = Annotated[ContactType1 | str, open_enum_validator(ContactType1)]
