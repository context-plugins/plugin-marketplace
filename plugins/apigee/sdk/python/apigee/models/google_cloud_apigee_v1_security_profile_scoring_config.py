from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityProfileScoringConfig(SdkBaseModel):
    """Security configurations to manage scoring."""

    description: Optional[str] = UNSET
    """Description of the config."""

    title: Optional[str] = UNSET
    """Title of the config."""

    score_path: Optional[str] = Field(default=UNSET, alias="scorePath")
    """Path of the component config used for scoring."""


class GoogleCloudApigeeV1SecurityProfileScoringConfigDict(TypedDict):
    description: NotRequired[str]
    title: NotRequired[str]
    score_path: NotRequired[str]
