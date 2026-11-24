from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClusterMetrics2(SdkBaseModel):
    """Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available
    for testing purposes only. It may be changed before final release."""

    hdfs_metrics: Optional[dict[str, str]] = Field(default=UNSET, alias="hdfsMetrics")
    """The HDFS metrics."""

    yarn_metrics: Optional[dict[str, str]] = Field(default=UNSET, alias="yarnMetrics")
    """YARN metrics."""


class ClusterMetrics2Dict(TypedDict):
    hdfs_metrics: NotRequired[dict[str, str]]
    yarn_metrics: NotRequired[dict[str, str]]
