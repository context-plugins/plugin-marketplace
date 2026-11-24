from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsOutputDestination(SdkBaseModel):
    """The Google Cloud Storage location for the output content."""

    output_uri_prefix: Optional[str] = Field(default=UNSET, alias="outputUriPrefix")
    """Required. Google Cloud Storage URI to output directory. For example, ``gs://bucket/directory``. The requesting
    user must have write permission to the bucket. The directory will be created if it doesn't exist."""


class GcsOutputDestinationDict(TypedDict):
    output_uri_prefix: NotRequired[str]
