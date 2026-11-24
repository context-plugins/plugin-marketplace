from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .batch_import_metadata import BatchImportMetadata, BatchImportMetadataDict


class BatchHistory(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    metadata_list: OptionalNullable[list[BatchImportMetadata]] = Field(default=UNSET, alias="metadataList")


class BatchHistoryDict(TypedDict):
    metadata_list: NotRequired[list[BatchImportMetadataDict] | None]
