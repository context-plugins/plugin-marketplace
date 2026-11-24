from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpgradeDocument(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    record_id: Optional[int] = Field(default=UNSET, alias="recordId")
    reference_document_serial: OptionalNullable[str] = Field(default=UNSET, alias="referenceDocumentSerial")
    reference_document_type: Optional[int] = Field(default=UNSET, alias="referenceDocumentType")


class UpgradeDocumentDict(TypedDict):
    record_id: NotRequired[int]
    reference_document_serial: NotRequired[str | None]
    reference_document_type: NotRequired[int]
