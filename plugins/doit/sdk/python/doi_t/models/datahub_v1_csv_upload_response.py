from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatahubV1CsvUploadResponse(SdkBaseModel):
    batch: Optional[str] = UNSET
    """batch id, generated during ingestion"""

    ingested_rows: Optional[int] = Field(default=UNSET, alias="ingestedRows")
    """the number of events that have been accepted for processing"""

    schema_template: Optional[str] = Field(default=UNSET, alias="schemaTemplate")
    """the schema template the file was validated against"""

    source_records: Optional[int] = Field(default=UNSET, alias="sourceRecords")
    """the number of source rows in the file"""

    generated_events: Optional[int] = Field(default=UNSET, alias="generatedEvents")
    """the number of DataHub events generated from the source rows"""

    replaced_batches: Optional[list[str]] = Field(default=UNSET, alias="replacedBatches")
    """ids of the batches soft-deleted because ``replace`` was set; omitted when none"""


class DatahubV1CsvUploadResponseDict(TypedDict):
    batch: NotRequired[str]
    ingested_rows: NotRequired[int]
    schema_template: NotRequired[str]
    source_records: NotRequired[int]
    generated_events: NotRequired[int]
    replaced_batches: NotRequired[list[str]]
