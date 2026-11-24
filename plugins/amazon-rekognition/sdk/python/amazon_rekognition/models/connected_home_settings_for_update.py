from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConnectedHomeSettingsForUpdate(SdkBaseModel):
    labels: Optional[list[str]] = Field(default=UNSET, alias="Labels")
    """Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you
    can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL"."""

    min_confidence: Optional[float] = Field(default=UNSET, alias="MinConfidence")
    """The minimum confidence required to label an object in the video."""


class ConnectedHomeSettingsForUpdateDict(TypedDict):
    labels: NotRequired[list[str]]
    min_confidence: NotRequired[float]
