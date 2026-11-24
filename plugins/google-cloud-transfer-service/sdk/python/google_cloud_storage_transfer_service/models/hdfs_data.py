from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HdfsData(SdkBaseModel):
    """An HdfsData resource specifies a path within an HDFS entity (e.g. a cluster). All cluster-specific settings, such
    as namenodes and ports, are configured on the transfer agents servicing requests, so HdfsData only contains the root
    path to the data in our transfer."""

    path: Optional[str] = UNSET
    """Root path to transfer files."""


class HdfsDataDict(TypedDict):
    path: NotRequired[str]
