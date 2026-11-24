from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_contact import XContact, XContactDict


class ContactsResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[XContact]] = UNSET


class ContactsResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[XContactDict]]
