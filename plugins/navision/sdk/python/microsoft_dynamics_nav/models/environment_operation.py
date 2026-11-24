from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.type import TypeOrStr


class EnvironmentOperation(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Operation ID used for tracking"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Type of operation"""

    status: Optional[StatusOrStr] = UNSET
    """Status of the operation"""

    aad_tenant_id: Optional[UUID] = Field(default=UNSET, alias="aadTenantId")
    """Microsoft Entra tenant ID"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """When the operation was created"""

    started_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedOn")
    """When the operation started executing"""

    completed_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="completedOn")
    """When the operation completed"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """Who created the operation"""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Error message for failed operations"""

    parameters: Optional[Any] = UNSET
    """Operation-specific parameters"""

    environment_name: Optional[str] = Field(default=UNSET, alias="environmentName")
    """Name of the affected environment"""

    environment_type: Optional[str] = Field(default=UNSET, alias="environmentType")
    """Type of the affected environment"""

    product_family: Optional[str] = Field(default=UNSET, alias="productFamily")
    """Product family of the affected environment"""


class EnvironmentOperationDict(TypedDict):
    id: NotRequired[UUID]
    type_: NotRequired[TypeOrStr]
    status: NotRequired[StatusOrStr]
    aad_tenant_id: NotRequired[UUID]
    created_on: NotRequired[RFC3339DateTime]
    started_on: NotRequired[RFC3339DateTime]
    completed_on: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    error_message: NotRequired[str]
    parameters: NotRequired[Any]
    environment_name: NotRequired[str]
    environment_type: NotRequired[str]
    product_family: NotRequired[str]
