from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsDestination(SdkBaseModel):
    """The Google Cloud Storage location for the output content."""

    output_uri_prefix: Optional[str] = Field(default=UNSET, alias="outputUriPrefix")
    """Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'.
    'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch
    translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned."""


class GcsDestinationDict(TypedDict):
    output_uri_prefix: NotRequired[str]
