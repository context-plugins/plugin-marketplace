from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityProfileEnvironment(SdkBaseModel):
    """Environment information of attached environments. Scoring an environment is enabled only if it is attached to a
    security profile."""

    attach_time: Optional[str] = Field(default=UNSET, alias="attachTime")
    """Output only. Time at which environment was attached to the security profile."""

    environment: Optional[str] = UNSET
    """Output only. Name of the environment."""


class GoogleCloudApigeeV1SecurityProfileEnvironmentDict(TypedDict):
    attach_time: NotRequired[str]
    environment: NotRequired[str]
