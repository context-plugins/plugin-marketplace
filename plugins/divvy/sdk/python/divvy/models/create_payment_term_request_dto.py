from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreatePaymentTermRequestDto(SdkBaseModel):
    """Create a payment term"""

    name: str
    """Payment term name. Examples include ``Net 30`` and ``Due upon receipt``."""

    days_due: int = Field(alias="daysDue")
    """Number of days until payment is due"""


class CreatePaymentTermRequestDtoDict(TypedDict):
    name: str
    days_due: int
