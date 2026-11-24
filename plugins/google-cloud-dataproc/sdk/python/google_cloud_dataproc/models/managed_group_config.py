from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ManagedGroupConfig(SdkBaseModel):
    """Specifies the resources used to actively manage an instance group."""

    instance_template_name: Optional[str] = Field(default=UNSET, alias="instanceTemplateName")
    """Output only. The name of the Instance Template used for the Managed Instance Group."""

    instance_group_manager_name: Optional[str] = Field(default=UNSET, alias="instanceGroupManagerName")
    """Output only. The name of the Instance Group Manager for this group."""

    instance_group_manager_uri: Optional[str] = Field(default=UNSET, alias="instanceGroupManagerUri")
    """Output only. The partial URI to the instance group manager for this group. E.g.
    projects/my-project/regions/us-central1/instanceGroupManagers/my-igm."""


class ManagedGroupConfigDict(TypedDict):
    instance_template_name: NotRequired[str]
    instance_group_manager_name: NotRequired[str]
    instance_group_manager_uri: NotRequired[str]
