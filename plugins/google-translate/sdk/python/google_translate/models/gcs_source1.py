from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsSource1(SdkBaseModel):
    """Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf"""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsSource1Dict(TypedDict):
    input_uri: NotRequired[str]
