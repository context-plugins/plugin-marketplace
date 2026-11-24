from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ComposerRecipeMetadata(SdkBaseModel):
    """Remediation guidance for the recipe. Always present; an empty object means no guidance is available. Each field
    is present only when the recipe has that content."""

    impacts: Optional[str] = UNSET
    """Possible impact of applying the remediation."""

    important_points: Optional[list[str]] = Field(default=UNSET, alias="importantPoints")
    """Points to consider before remediating."""

    reference: Optional[str] = UNSET
    """Documentation URL for the finding."""

    manual_remediation: Optional[str] = Field(default=UNSET, alias="manualRemediation")
    """HTML describing how to remediate the finding manually."""


class ComposerRecipeMetadataDict(TypedDict):
    impacts: NotRequired[str]
    important_points: NotRequired[list[str]]
    reference: NotRequired[str]
    manual_remediation: NotRequired[str]
