from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.permission import PermissionOrStr


class BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    permission: PermissionOrStr


class BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict(TypedDict):
    permission: PermissionOrStr
