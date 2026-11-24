from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsProfile(SdkBaseModel):
    """Profile for connecting to a Cloud Storage destination."""

    bucket: Optional[str] = UNSET
    """Required. The Cloud Storage bucket name."""

    root_path: Optional[str] = Field(default=UNSET, alias="rootPath")
    """Optional. The root path inside the Cloud Storage bucket."""


class GcsProfileDict(TypedDict):
    bucket: NotRequired[str]
    root_path: NotRequired[str]
