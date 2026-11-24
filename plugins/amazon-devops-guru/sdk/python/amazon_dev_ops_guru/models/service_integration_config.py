from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .kms_server_side_encryption_integration import (
    KmsServerSideEncryptionIntegration,
    KmsServerSideEncryptionIntegrationDict,
)
from .logs_anomaly_detection_integration import LogsAnomalyDetectionIntegration, LogsAnomalyDetectionIntegrationDict
from .ops_center_integration import OpsCenterIntegration, OpsCenterIntegrationDict


class ServiceIntegrationConfig(SdkBaseModel):
    ops_center: Optional[OpsCenterIntegration] = Field(default=UNSET, alias="OpsCenter")
    logs_anomaly_detection: Optional[LogsAnomalyDetectionIntegration] = Field(
        default=UNSET, alias="LogsAnomalyDetection"
    )
    kms_server_side_encryption: Optional[KmsServerSideEncryptionIntegration] = Field(
        default=UNSET, alias="KMSServerSideEncryption"
    )


class ServiceIntegrationConfigDict(TypedDict):
    ops_center: NotRequired[OpsCenterIntegrationDict]
    logs_anomaly_detection: NotRequired[LogsAnomalyDetectionIntegrationDict]
    kms_server_side_encryption: NotRequired[KmsServerSideEncryptionIntegrationDict]
