from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LabelCategory(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of a category that applies to a given label."""


class LabelCategoryDict(TypedDict):
    name: NotRequired[str]
