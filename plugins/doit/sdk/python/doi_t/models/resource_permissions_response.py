from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.public_doi_t_sharing_api import PublicDoiTSharingApiOrStr
from .resource_permission import ResourcePermission, ResourcePermissionDict


class ResourcePermissionsResponse(SdkBaseModel):
    """Permissions and metadata for a resource returned by the sharing API."""

    id: Optional[str] = UNSET
    """Resource ID."""

    name: Optional[str] = UNSET
    """Resource name."""

    description: Optional[str] = UNSET
    """Resource description."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when this resource was created, in milliseconds since the epoch."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The time when this resource was last updated, in milliseconds since the epoch."""

    permissions: Optional[list[ResourcePermission]] = UNSET
    public: OptionalNullable[PublicDoiTSharingApiOrStr] = UNSET
    """Type of permissions users in the entire organization have for this resource"""


class ResourcePermissionsResponseDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    permissions: NotRequired[list[ResourcePermissionDict]]
    public: NotRequired[PublicDoiTSharingApiOrStr | None]
