from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatahubV1ImportResponse(SdkBaseModel):
    batch: Optional[str] = UNSET
    ingested_rows: Optional[int] = Field(default=UNSET, alias="ingestedRows")
    schema_template: Optional[str] = Field(default=UNSET, alias="schemaTemplate")
    source_records: Optional[int] = Field(default=UNSET, alias="sourceRecords")
    generated_events: Optional[int] = Field(default=UNSET, alias="generatedEvents")
    replaced_batches: Optional[list[str]] = Field(default=UNSET, alias="replacedBatches")


class DatahubV1ImportResponseDict(TypedDict):
    batch: NotRequired[str]
    ingested_rows: NotRequired[int]
    schema_template: NotRequired[str]
    source_records: NotRequired[int]
    generated_events: NotRequired[int]
    replaced_batches: NotRequired[list[str]]
