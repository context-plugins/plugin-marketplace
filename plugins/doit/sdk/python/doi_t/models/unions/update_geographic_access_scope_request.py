from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..country_geographic_access_scope_request import (
    CountryGeographicAccessScopeRequest,
    CountryGeographicAccessScopeRequestDict,
)
from ..custom_region_geographic_access_scope import (
    CustomRegionGeographicAccessScope,
    CustomRegionGeographicAccessScopeDict,
)
from ..global_geographic_access_scope import GlobalGeographicAccessScope, GlobalGeographicAccessScopeDict

UpdateGeographicAccessScopeRequest: TypeAlias = Annotated[
    (
        Annotated[GlobalGeographicAccessScope, Tag("global")]
        | Annotated[CountryGeographicAccessScopeRequest, Tag("country")]
        | Annotated[CustomRegionGeographicAccessScope, Tag("customRegion")]
    ),
    WireDiscriminator("type"),
]

UpdateGeographicAccessScopeRequestDict: TypeAlias = (
    GlobalGeographicAccessScopeDict | CountryGeographicAccessScopeRequestDict | CustomRegionGeographicAccessScopeDict
)
