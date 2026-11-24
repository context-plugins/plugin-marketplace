from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .batch_import_metadata import BatchImportMetadata, BatchImportMetadataDict
from .batch_message_status import BatchMessageStatus, BatchMessageStatusDict


class BatchStatus(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    messages: OptionalNullable[list[BatchMessageStatus]] = UNSET
    metadata: Optional[BatchImportMetadata] = UNSET


class BatchStatusDict(TypedDict):
    messages: NotRequired[list[BatchMessageStatusDict] | None]
    metadata: NotRequired[BatchImportMetadataDict]
