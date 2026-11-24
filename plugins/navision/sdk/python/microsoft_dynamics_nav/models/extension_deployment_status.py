from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_business_central_automation_api_v20_extension_deployment import (
    StatusBusinessCentralAutomationApiV20ExtensionDeploymentOrStr,
)


class ExtensionDeploymentStatus(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    """Extension name"""

    publisher: Optional[str] = UNSET
    """Extension publisher"""

    operation_type: Optional[str] = Field(default=UNSET, alias="operationType")
    """Type of deployment operation"""

    status: Optional[StatusBusinessCentralAutomationApiV20ExtensionDeploymentOrStr] = UNSET
    """Deployment status"""

    app_version: Optional[str] = Field(default=UNSET, alias="appVersion")
    """Extension version"""

    started_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedOn")


class ExtensionDeploymentStatusDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    publisher: NotRequired[str]
    operation_type: NotRequired[str]
    status: NotRequired[StatusBusinessCentralAutomationApiV20ExtensionDeploymentOrStr]
    app_version: NotRequired[str]
    started_on: NotRequired[RFC3339DateTime]
