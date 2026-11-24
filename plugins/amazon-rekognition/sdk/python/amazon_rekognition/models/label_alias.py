from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LabelAlias(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of an alias for a given label."""


class LabelAliasDict(TypedDict):
    name: NotRequired[str]
