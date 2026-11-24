from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TranscriptOutputConfig(SdkBaseModel):
    """Specifies an optional destination for the recognition results."""

    gcs_uri: Optional[str] = Field(default=UNSET, alias="gcsUri")
    """Specifies a Cloud Storage URI for the recognition results. Must be specified in the format:
    ``gs://bucket_name/object_name``, and the bucket must already exist."""


class TranscriptOutputConfigDict(TypedDict):
    gcs_uri: NotRequired[str]
