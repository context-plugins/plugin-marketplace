from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_policy import ResourcePolicy, ResourcePolicyDict


class PutResourcePolicyResult(SdkBaseModel):
    resource_policy: Optional[ResourcePolicy] = Field(default=UNSET, alias="ResourcePolicy")


class PutResourcePolicyResultDict(TypedDict):
    resource_policy: NotRequired[ResourcePolicyDict]
