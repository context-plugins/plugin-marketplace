from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdatePaymentTermRequestDto(SdkBaseModel):
    """Update a payment term"""

    name: Optional[str] = UNSET
    """Payment term name. Examples include ``Net 30`` and ``Due upon receipt``."""

    days_due: Optional[int] = Field(default=UNSET, alias="daysDue")
    """Number of days until payment is due"""


class UpdatePaymentTermRequestDtoDict(TypedDict):
    name: NotRequired[str]
    days_due: NotRequired[int]
