from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Facet1BitlyGroupsApi(str, Enum):
    COUNTRIES = "countries"
    CITIES = "cities"
    DEVICES = "devices"
    REFERRERS = "referrers"
    REFERRERS_BY_DOMAIN = "referrers_by_domain"
    REFERRING_DOMAINS = "referring_domains"
    REFERRING_NETWORKS = "referring_networks"
    SHORTEN_COUNTS = "shorten_counts"

    __str__ = str.__str__


Facet1BitlyGroupsApiOrStr: TypeAlias = Annotated[Facet1BitlyGroupsApi | str, open_enum_validator(Facet1BitlyGroupsApi)]
