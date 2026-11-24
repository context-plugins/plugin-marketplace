from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RefineTextResponse(SdkBaseModel):
    """Response message for RefineText."""

    refined_translations: Optional[list[str]] = Field(default=UNSET, alias="refinedTranslations")
    """The refined translations obtained from the original translations."""


class RefineTextResponseDict(TypedDict):
    refined_translations: NotRequired[list[str]]
