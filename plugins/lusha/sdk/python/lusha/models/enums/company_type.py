from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CompanyType(str, Enum):
    GOVERNMENT = "Government"
    PRIVATE_COMPANY = "Private Company"
    PUBLIC_COMPANY = "Public Company"
    EDUCATIONAL = "Educational"
    NON_PROFIT = "Non Profit"
    SELF_EMPLOYED = "Self Employed"

    __str__ = str.__str__


CompanyTypeOrStr: TypeAlias = Annotated[CompanyType | str, open_enum_validator(CompanyType)]
