from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShowcaseBackground(SdkBaseModel):
    """Background styling for a product showcase"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    primary: Optional[str] = UNSET
    secondary: Optional[str] = UNSET


class ShowcaseBackgroundDict(TypedDict):
    type_: NotRequired[str]
    primary: NotRequired[str]
    secondary: NotRequired[str]
