from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attribute import Attribute, AttributeDict


class AttributeList(SdkBaseModel):
    """A list of user attribute definitions."""

    data: Optional[list[Attribute]] = UNSET
    """Array of attribute objects."""


class AttributeListDict(TypedDict):
    data: NotRequired[list[AttributeDict]]
