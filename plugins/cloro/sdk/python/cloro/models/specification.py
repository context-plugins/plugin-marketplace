from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Specification(SdkBaseModel):
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Specification name"""

    values: Optional[list[str]] = UNSET
    """Available values"""


class SpecificationDict(TypedDict):
    display_name: NotRequired[str]
    values: NotRequired[list[str]]
