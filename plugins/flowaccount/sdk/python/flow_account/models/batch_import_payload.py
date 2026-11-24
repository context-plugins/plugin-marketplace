from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .simple_document import SimpleDocument, SimpleDocumentDict


class BatchImportPayload(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    simple_documents: OptionalNullable[list[SimpleDocument]] = Field(default=UNSET, alias="simpleDocuments")
    batch_id: OptionalNullable[str] = Field(default=UNSET, alias="batchId")
    file_name: OptionalNullable[str] = Field(default=UNSET, alias="fileName")
    batch_count: Optional[int] = Field(default=UNSET, alias="batchCount")


class BatchImportPayloadDict(TypedDict):
    simple_documents: NotRequired[list[SimpleDocumentDict] | None]
    batch_id: NotRequired[str | None]
    file_name: NotRequired[str | None]
    batch_count: NotRequired[int]
