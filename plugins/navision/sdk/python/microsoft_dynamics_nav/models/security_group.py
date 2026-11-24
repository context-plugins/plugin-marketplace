from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SecurityGroup(SdkBaseModel):
    id: Optional[UUID] = UNSET
    group_id: Optional[UUID] = Field(default=UNSET, alias="groupId")
    """The Microsoft Entra security group ID"""

    code: Optional[str] = UNSET
    """The security group code"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The security group display name"""


class SecurityGroupDict(TypedDict):
    id: NotRequired[UUID]
    group_id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
