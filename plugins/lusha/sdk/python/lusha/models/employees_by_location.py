from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class EmployeesByLocation(SdkBaseModel):
    country: Optional[str] = UNSET
    """Country name"""

    state: OptionalNullable[str] = UNSET
    """State or region (null when not available)"""

    count: Optional[int] = UNSET
    """Number of employees in this location"""


class EmployeesByLocationDict(TypedDict):
    country: NotRequired[str]
    state: NotRequired[str | None]
    count: NotRequired[int]
