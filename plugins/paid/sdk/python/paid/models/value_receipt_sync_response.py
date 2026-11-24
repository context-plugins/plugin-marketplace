from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValueReceiptSyncResponse(SdkBaseModel):
    id: str
    status: str
    public_url_token: str = Field(alias="publicUrlToken")
    public_url: str = Field(alias="publicUrl")


class ValueReceiptSyncResponseDict(TypedDict):
    id: str
    status: str
    public_url_token: str
    public_url: str
