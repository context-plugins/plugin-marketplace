from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name23 import Name23OrStr


class AssociatedTranscriptFilter(SdkBaseModel):
    name: Name23OrStr
    """The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId."""

    values: list[str]
    """The values to use to filter the transcript."""


class AssociatedTranscriptFilterDict(TypedDict):
    name: Name23OrStr
    values: list[str]
