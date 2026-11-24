from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessType(str, Enum):
    """Incorporation type of the business"""

    DBA = "DBA"
    LLC = "LLC"
    MMLLC = "MMLLC"
    GENERAL_PARTNERSHIP = "GENERAL_PARTNERSHIP"
    LLP = "LLP"
    S_CORP = "S_CORP"
    SSN = "SSN"
    C_CORP = "C_CORP"

    __str__ = str.__str__


BusinessTypeOrStr: TypeAlias = Annotated[BusinessType | str, open_enum_validator(BusinessType)]
