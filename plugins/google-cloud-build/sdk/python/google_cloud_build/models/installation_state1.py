from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.stage import StageOrStr


class InstallationState1(SdkBaseModel):
    """Output only. Installation state of the Connection."""

    message: Optional[str] = UNSET
    """Output only. Message of what the user should do next to continue the installation. Empty string if the
    installation is already complete."""

    action_uri: Optional[str] = Field(default=UNSET, alias="actionUri")
    """Output only. Link to follow for next action. Empty string if the installation is already complete."""

    stage: Optional[StageOrStr] = UNSET
    """Output only. Current step of the installation process."""


class InstallationState1Dict(TypedDict):
    message: NotRequired[str]
    action_uri: NotRequired[str]
    stage: NotRequired[StageOrStr]
