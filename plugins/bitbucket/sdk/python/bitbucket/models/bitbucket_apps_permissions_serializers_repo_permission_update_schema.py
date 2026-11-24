from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.permission2 import Permission2OrStr


class BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    permission: Permission2OrStr


class BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict(TypedDict):
    permission: Permission2OrStr
