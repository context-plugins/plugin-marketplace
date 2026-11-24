from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .information import Information, InformationDict
from .primary import Primary, PrimaryDict


class Permission(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    scope: str
    required: bool
    consented: Optional[bool] = UNSET
    entity: str
    information: Information
    purpose: Primary


class PermissionDict(TypedDict):
    scope: str
    required: bool
    consented: NotRequired[bool]
    entity: str
    information: InformationDict
    purpose: PrimaryDict
