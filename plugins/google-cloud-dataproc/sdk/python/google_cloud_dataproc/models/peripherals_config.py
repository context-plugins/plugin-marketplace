from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_history_server_config1 import SparkHistoryServerConfig1, SparkHistoryServerConfig1Dict


class PeripheralsConfig(SdkBaseModel):
    """Auxiliary services configuration for a workload."""

    metastore_service: Optional[str] = Field(default=UNSET, alias="metastoreService")
    """Optional. Resource name of an existing Dataproc Metastore service.Example:
    projects/[project_id]/locations/[region]/services/[service_id]"""

    spark_history_server_config: Optional[SparkHistoryServerConfig1] = Field(
        default=UNSET, alias="sparkHistoryServerConfig"
    )
    """Optional. The Spark History Server configuration for the workload."""


class PeripheralsConfigDict(TypedDict):
    metastore_service: NotRequired[str]
    spark_history_server_config: NotRequired[SparkHistoryServerConfig1Dict]
