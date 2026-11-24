from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HdfsData2(SdkBaseModel):
    """Optional. An HDFS cluster data source."""

    path: Optional[str] = UNSET
    """Root path to transfer files."""


class HdfsData2Dict(TypedDict):
    path: NotRequired[str]
