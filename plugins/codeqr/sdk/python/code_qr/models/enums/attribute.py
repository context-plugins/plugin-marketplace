from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute(str, Enum):
    DEVICE = "device"
    COUNTRY = "country"
    UTM_SOURCE = "utm_source"
    UTM_MEDIUM = "utm_medium"
    UTM_CAMPAIGN = "utm_campaign"
    REFERRER = "referrer"
    LANGUAGE = "language"
    CITY = "city"
    REGION = "region"
    CONTINENT = "continent"
    UTM_TERM = "utm_term"
    UTM_CONTENT = "utm_content"

    __str__ = str.__str__


AttributeOrStr: TypeAlias = Annotated[Attribute | str, open_enum_validator(Attribute)]
