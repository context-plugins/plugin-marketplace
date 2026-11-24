from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.target_selection import TargetSelectionOrStr


class CreateOtaUpdateRequest(SdkBaseModel):
    ota_update_id: str = Field(alias="otaUpdateId")
    description: Optional[str] = UNSET
    targets: list[str]
    protocols: Optional[list[str]] = UNSET
    target_selection: Optional[TargetSelectionOrStr] = Field(default=UNSET, alias="targetSelection")
    files: list[Any]
    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    tags: Optional[dict[str, str]] = UNSET


class CreateOtaUpdateRequestDict(TypedDict):
    ota_update_id: str
    description: NotRequired[str]
    targets: list[str]
    protocols: NotRequired[list[str]]
    target_selection: NotRequired[TargetSelectionOrStr]
    files: list[Any]
    role_arn: NotRequired[str]
    tags: NotRequired[dict[str, str]]
