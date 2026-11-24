from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Facet(str, Enum):
    REFERRERS_BY_DOMAINS = "referrers_by_domains"

    __str__ = str.__str__


FacetOrStr: TypeAlias = Annotated[Facet | str, open_enum_validator(Facet)]
