from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerByExternalId(SdkBaseModel):
    external_customer_id: str = Field(alias="externalCustomerId")
    """Your external customer ID"""


class CustomerByExternalIdDict(TypedDict):
    external_customer_id: str
