from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CompanyTypeEnum(int, Enum):
    """10 = PrivateWithTax 20 = PrivateWithoutTax 30 = Personal 40 = PersonalWithTax 50 = PartnershipLimitedWithTax 60 =
    PartnershipLimitedWithoutTax"""

    VALUE_10 = 10
    VALUE_20 = 20
    VALUE_30 = 30
    VALUE_40 = 40
    VALUE_50 = 50
    VALUE_60 = 60

    __str__ = str.__str__


CompanyTypeEnumOrInt: TypeAlias = Annotated[CompanyTypeEnum | int, open_enum_validator(CompanyTypeEnum)]
