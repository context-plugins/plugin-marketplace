from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FacetBitlyCustomBitlinksApi(str, Enum):
    COUNTRIES = "countries"
    CITIES = "cities"
    DEVICES = "devices"
    REFERRERS = "referrers"
    REFERRERS_BY_DOMAIN = "referrers_by_domain"
    REFERRING_DOMAINS = "referring_domains"
    REFERRING_NETWORKS = "referring_networks"
    SHORTEN_COUNTS = "shorten_counts"
    DESTINATIONS = "destinations"

    __str__ = str.__str__


FacetBitlyCustomBitlinksApiOrStr: TypeAlias = Annotated[
    FacetBitlyCustomBitlinksApi | str, open_enum_validator(FacetBitlyCustomBitlinksApi)
]
