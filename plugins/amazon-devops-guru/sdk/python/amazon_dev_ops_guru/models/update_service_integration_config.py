from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kms_server_side_encryption_integration_config import (
    KmsServerSideEncryptionIntegrationConfig,
    KmsServerSideEncryptionIntegrationConfigDict,
)
from .logs_anomaly_detection_integration_config import (
    LogsAnomalyDetectionIntegrationConfig,
    LogsAnomalyDetectionIntegrationConfigDict,
)
from .ops_center_integration_config import OpsCenterIntegrationConfig, OpsCenterIntegrationConfigDict


class UpdateServiceIntegrationConfig(SdkBaseModel):
    ops_center: Optional[OpsCenterIntegrationConfig] = Field(default=UNSET, alias="OpsCenter")
    logs_anomaly_detection: Optional[LogsAnomalyDetectionIntegrationConfig] = Field(
        default=UNSET, alias="LogsAnomalyDetection"
    )
    kms_server_side_encryption: Optional[KmsServerSideEncryptionIntegrationConfig] = Field(
        default=UNSET, alias="KMSServerSideEncryption"
    )


class UpdateServiceIntegrationConfigDict(TypedDict):
    ops_center: NotRequired[OpsCenterIntegrationConfigDict]
    logs_anomaly_detection: NotRequired[LogsAnomalyDetectionIntegrationConfigDict]
    kms_server_side_encryption: NotRequired[KmsServerSideEncryptionIntegrationConfigDict]
