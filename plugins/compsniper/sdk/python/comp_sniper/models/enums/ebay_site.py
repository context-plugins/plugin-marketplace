from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EbaySite(str, Enum):
    EBAY_COM = "ebay.com"
    EBAY_CO_UK = "ebay.co.uk"
    EBAY_DE = "ebay.de"
    EBAY_FR = "ebay.fr"
    EBAY_IT = "ebay.it"
    EBAY_ES = "ebay.es"
    EBAY_CA = "ebay.ca"
    EBAY_COM_AU = "ebay.com.au"

    __str__ = str.__str__


EbaySiteOrStr: TypeAlias = Annotated[EbaySite | str, open_enum_validator(EbaySite)]
