from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class QrcodesBulkResponse(SdkBaseModel):
    deleted_count: float = Field(alias="deletedCount")
    """The number of QR Codes deleted."""


class QrcodesBulkResponseDict(TypedDict):
    deleted_count: float
