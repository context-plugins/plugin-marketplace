from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metastore_config1 import MetastoreConfig1, MetastoreConfig1Dict
from .spark_history_server_config1 import SparkHistoryServerConfig1, SparkHistoryServerConfig1Dict


class AuxiliaryServicesConfig2(SdkBaseModel):
    """Optional. Configuration of auxiliary services used by this cluster."""

    spark_history_server_config: Optional[SparkHistoryServerConfig1] = Field(
        default=UNSET, alias="sparkHistoryServerConfig"
    )
    """Optional. The Spark History Server configuration for the workload."""

    metastore_config: Optional[MetastoreConfig1] = Field(default=UNSET, alias="metastoreConfig")
    """Optional. The Hive Metastore configuration for this workload."""


class AuxiliaryServicesConfig2Dict(TypedDict):
    spark_history_server_config: NotRequired[SparkHistoryServerConfig1Dict]
    metastore_config: NotRequired[MetastoreConfig1Dict]
