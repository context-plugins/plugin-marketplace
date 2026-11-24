from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Example(SdkBaseModel):
    """A sentence pair."""

    source_text: Optional[str] = Field(default=UNSET, alias="sourceText")
    """Sentence in source language."""

    usage: Optional[str] = UNSET
    """Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST."""

    name: Optional[str] = UNSET
    """Output only. The resource name of the example, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}``"""

    target_text: Optional[str] = Field(default=UNSET, alias="targetText")
    """Sentence in target language."""


class ExampleDict(TypedDict):
    source_text: NotRequired[str]
    usage: NotRequired[str]
    name: NotRequired[str]
    target_text: NotRequired[str]
