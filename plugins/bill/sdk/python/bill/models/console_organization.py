from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConsoleOrganization(SdkBaseModel):
    """Console organization response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the organization. The value begins with ``008``."""

    name: Optional[str] = UNSET
    """Organization name"""


class ConsoleOrganizationDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
