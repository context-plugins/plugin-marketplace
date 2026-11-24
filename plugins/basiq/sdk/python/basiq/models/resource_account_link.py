from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceAccountLink(SdkBaseModel):
    """Link object containing a link to the resource, self reference."""

    self: str
    """URL of the resource."""

    transactions: Optional[str] = UNSET
    """transactions link to the transactions associated with this account."""

    connection: Optional[str] = UNSET
    """connection associated to User."""

    institution: Optional[str] = UNSET
    """institution link to the institution associated with this account."""

    statements: Optional[str] = UNSET


class ResourceAccountLinkDict(TypedDict):
    self: str
    transactions: NotRequired[str]
    connection: NotRequired[str]
    institution: NotRequired[str]
    statements: NotRequired[str]
