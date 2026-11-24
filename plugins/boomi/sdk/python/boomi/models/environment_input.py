from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.classification1 import Classification1OrStr


class EnvironmentInput(SdkBaseModel):
    """Input for creating a runtime environment."""

    name: str
    """Display name for the environment."""

    classification: Classification1OrStr
    """Whether this is a production or test environment."""


class EnvironmentInputDict(TypedDict):
    name: str
    classification: Classification1OrStr
