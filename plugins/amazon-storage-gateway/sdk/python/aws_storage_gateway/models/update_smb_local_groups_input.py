from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .smb_local_groups import SmbLocalGroups, SmbLocalGroupsDict


class UpdateSmbLocalGroupsInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    smb_local_groups: SmbLocalGroups = Field(alias="SMBLocalGroups")


class UpdateSmbLocalGroupsInputDict(TypedDict):
    gateway_arn: str
    smb_local_groups: SmbLocalGroupsDict
