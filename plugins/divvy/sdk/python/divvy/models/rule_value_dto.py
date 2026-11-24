from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RuleValueDto(SdkBaseModel):
    """Rule value DTO."""

    value: Optional[str] = UNSET
    """Value"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Display name"""


class RuleValueDtoDict(TypedDict):
    value: NotRequired[str]
    display_name: NotRequired[str]
