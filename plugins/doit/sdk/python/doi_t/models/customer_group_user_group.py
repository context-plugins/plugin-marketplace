from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerGroupUserGroup(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    user_group_id: str = Field(alias="userGroupId")
    """User group assigned to the customer group."""


class CustomerGroupUserGroupDict(TypedDict):
    user_group_id: str
