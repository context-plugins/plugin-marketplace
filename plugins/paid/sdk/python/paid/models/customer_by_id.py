from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerById(SdkBaseModel):
    customer_id: str = Field(alias="customerId")
    """The Paid customer ID"""


class CustomerByIdDict(TypedDict):
    customer_id: str
