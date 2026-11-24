from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RenderBundleEdit(SdkBaseModel):
    old_text: str = Field(alias="oldText")
    """Exact text to find in the CURRENT stored bundle (fetch it via getCustomViewAuthoring first — it may have been
    hand-edited). Must match exactly once unless ``replaceAll`` is true; include enough surrounding context to make it
    unique."""

    new_text: str = Field(alias="newText")
    """Replacement text. May be empty to delete the matched text."""

    replace_all: Optional[bool] = Field(default=UNSET, alias="replaceAll")
    """Replace every occurrence instead of requiring a unique match (e.g. renaming a variable or color). Default
    false."""


class RenderBundleEditDict(TypedDict):
    old_text: str
    new_text: str
    replace_all: NotRequired[bool]
