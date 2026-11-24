from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LabelInfo(SdkBaseModel):
    """Metadata for a label."""

    id: str
    """The unique identifier of the label."""

    name: str
    """The name of the label."""


class LabelInfoDict(TypedDict):
    id: str
    name: str
