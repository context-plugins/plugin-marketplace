from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_role import CustomRole, CustomRoleDict
from .enums.level import LevelOrStr


class CloudflowGcpConfigRequest(SdkBaseModel):
    """GCP connection configuration. Server-owned fields (status, deploymentCommand) are excluded."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    folder_id: Optional[str] = Field(default=UNSET, alias="folderId")
    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    level: Optional[LevelOrStr] = UNSET
    service_account_name: Optional[str] = Field(default=UNSET, alias="serviceAccountName")
    predefined_roles: Optional[list[str]] = Field(default=UNSET, alias="predefinedRoles")
    custom_role: Optional[CustomRole] = Field(default=UNSET, alias="customRole")
    infra_manager_project: Optional[str] = Field(default=UNSET, alias="infraManagerProject")
    infra_manager_location: Optional[str] = Field(default=UNSET, alias="infraManagerLocation")
    infra_manager_service_account: Optional[str] = Field(default=UNSET, alias="infraManagerServiceAccount")


class CloudflowGcpConfigRequestDict(TypedDict):
    organization_id: NotRequired[str]
    folder_id: NotRequired[str]
    project_id: NotRequired[str]
    level: NotRequired[LevelOrStr]
    service_account_name: NotRequired[str]
    predefined_roles: NotRequired[list[str]]
    custom_role: NotRequired[CustomRoleDict]
    infra_manager_project: NotRequired[str]
    infra_manager_location: NotRequired[str]
    infra_manager_service_account: NotRequired[str]
