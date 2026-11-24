from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..country_geographic_access_scope import CountryGeographicAccessScope, CountryGeographicAccessScopeDict
from ..custom_region_geographic_access_scope import (
    CustomRegionGeographicAccessScope,
    CustomRegionGeographicAccessScopeDict,
)
from ..global_geographic_access_scope import GlobalGeographicAccessScope, GlobalGeographicAccessScopeDict
from ..unassigned_geographic_access_scope import UnassignedGeographicAccessScope, UnassignedGeographicAccessScopeDict

GeographicAccessScope: TypeAlias = Annotated[
    (
        Annotated[UnassignedGeographicAccessScope, Tag("unassigned")]
        | Annotated[GlobalGeographicAccessScope, Tag("global")]
        | Annotated[CountryGeographicAccessScope, Tag("country")]
        | Annotated[CustomRegionGeographicAccessScope, Tag("customRegion")]
    ),
    WireDiscriminator("type"),
]

GeographicAccessScopeDict: TypeAlias = (
    UnassignedGeographicAccessScopeDict
    | GlobalGeographicAccessScopeDict
    | CountryGeographicAccessScopeDict
    | CustomRegionGeographicAccessScopeDict
)
