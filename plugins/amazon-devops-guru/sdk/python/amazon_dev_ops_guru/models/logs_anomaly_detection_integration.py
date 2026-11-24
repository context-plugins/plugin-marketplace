from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.opt_in_status1 import OptInStatus1OrStr


class LogsAnomalyDetectionIntegration(SdkBaseModel):
    opt_in_status: Optional[OptInStatus1OrStr] = Field(default=UNSET, alias="OptInStatus")
    """Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups."""


class LogsAnomalyDetectionIntegrationDict(TypedDict):
    opt_in_status: NotRequired[OptInStatus1OrStr]
