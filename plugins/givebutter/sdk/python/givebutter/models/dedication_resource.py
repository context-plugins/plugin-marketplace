from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recipient import Recipient, RecipientDict


class DedicationResource(SdkBaseModel):
    type_: str = Field(alias="type")
    name: str
    recipient: Recipient
    created_at: str
    updated_at: str


class DedicationResourceDict(TypedDict):
    type_: str
    name: str
    recipient: RecipientDict
    created_at: str
    updated_at: str
