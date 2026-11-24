from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TransactionLineItemResource(SdkBaseModel):
    type_: str = Field(alias="type")
    subtype: str
    description: str
    quantity: int
    price: float
    discount: float
    total: float
    created_at: str
    updated_at: str


class TransactionLineItemResourceDict(TypedDict):
    type_: str
    subtype: str
    description: str
    quantity: int
    price: float
    discount: float
    total: float
    created_at: str
    updated_at: str
