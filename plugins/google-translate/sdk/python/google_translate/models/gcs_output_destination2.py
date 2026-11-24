from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsOutputDestination2(SdkBaseModel):
    """Google Cloud Storage destination to write the output."""

    output_uri_prefix: Optional[str] = Field(default=UNSET, alias="outputUriPrefix")
    """Required. Google Cloud Storage URI to output directory. For example, ``gs://bucket/directory``. The requesting
    user must have write permission to the bucket. The directory will be created if it doesn't exist."""


class GcsOutputDestination2Dict(TypedDict):
    output_uri_prefix: NotRequired[str]
