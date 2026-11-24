from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsInputSource1(SdkBaseModel):
    """Google Cloud Storage file source."""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsInputSource1Dict(TypedDict):
    input_uri: NotRequired[str]
