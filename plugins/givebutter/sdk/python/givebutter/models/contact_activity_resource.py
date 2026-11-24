from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resource_type import ResourceTypeOrStr
from .public_user_resource import PublicUserResource, PublicUserResourceDict
from .unions.resource1 import Resource1, Resource1Dict


class ContactActivityResource(SdkBaseModel):
    id: str
    type_: str = Field(alias="type")
    source: str
    data: str
    resource: Resource1
    resource_type: ResourceTypeOrStr | None
    created_by: Optional[PublicUserResource] = UNSET
    occurred_at: str
    created_at: str
    updated_at: str


class ContactActivityResourceDict(TypedDict):
    id: str
    type_: str
    source: str
    data: str
    resource: Resource1Dict
    resource_type: ResourceTypeOrStr | None
    created_by: NotRequired[PublicUserResourceDict]
    occurred_at: str
    created_at: str
    updated_at: str
