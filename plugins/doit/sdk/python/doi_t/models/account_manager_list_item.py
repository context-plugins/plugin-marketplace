from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountManagerListItem(SdkBaseModel):
    """Information of a DoiT account manager assigned to your organization."""

    email: Optional[str] = UNSET
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    role: Optional[str] = UNSET
    calendly_link: Optional[str] = Field(default=UNSET, alias="calendlyLink")


class AccountManagerListItemDict(TypedDict):
    email: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    role: NotRequired[str]
    calendly_link: NotRequired[str]
