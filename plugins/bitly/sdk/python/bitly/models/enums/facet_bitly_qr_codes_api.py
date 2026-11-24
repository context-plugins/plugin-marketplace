from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FacetBitlyQrCodesApi(str, Enum):
    COUNTRIES = "countries"
    CITIES = "cities"
    DEVICE_OS = "device_os"
    BROWSERS = "browsers"
    DESTINATIONS = "destinations"

    __str__ = str.__str__


FacetBitlyQrCodesApiOrStr: TypeAlias = Annotated[FacetBitlyQrCodesApi | str, open_enum_validator(FacetBitlyQrCodesApi)]
