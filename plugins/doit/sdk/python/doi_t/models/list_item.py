from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListItem(SdkBaseModel):
    """Invoice line item."""

    currency: Optional[str] = UNSET
    description: Optional[str] = UNSET
    details: Optional[str] = UNSET
    price: Optional[float] = UNSET
    qty: Optional[float] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class ListItemDict(TypedDict):
    currency: NotRequired[str]
    description: NotRequired[str]
    details: NotRequired[str]
    price: NotRequired[float]
    qty: NotRequired[float]
    type_: NotRequired[str]
