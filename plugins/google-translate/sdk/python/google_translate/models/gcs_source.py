from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsSource(SdkBaseModel):
    """The Google Cloud Storage location for the input content."""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsSourceDict(TypedDict):
    input_uri: NotRequired[str]
