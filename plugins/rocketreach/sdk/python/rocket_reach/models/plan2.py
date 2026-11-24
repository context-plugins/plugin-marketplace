from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Plan2(SdkBaseModel):
    """Object representing the user's plan"""

    id: Optional[int] = UNSET
    """RocketReach internal unique plan ID"""

    name: Optional[str] = UNSET
    """Name of the plan"""

    lookup_limit: Optional[int] = UNSET
    """Maximum number of lookups for the plan"""

    export_limit: Optional[int] = UNSET
    """Maximum number of exports for the plan"""


class Plan2Dict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    lookup_limit: NotRequired[int]
    export_limit: NotRequired[int]
