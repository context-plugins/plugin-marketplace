from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Versions(SdkBaseModel):
    minimum: Optional[str] = Field(default=UNSET, alias="Minimum")
    """The desired minimum version for the challenge."""

    maximum: Optional[str] = Field(default=UNSET, alias="Maximum")
    """The desired maximum version for the challenge."""


class VersionsDict(TypedDict):
    minimum: NotRequired[str]
    maximum: NotRequired[str]
