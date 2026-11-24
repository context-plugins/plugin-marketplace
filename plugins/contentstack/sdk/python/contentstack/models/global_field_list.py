from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .global_field import GlobalField, GlobalFieldDict


class GlobalFieldList(SdkBaseModel):
    """A list of global field definitions in the stack."""

    global_fields: Optional[list[GlobalField]] = UNSET
    """Array of global field objects."""


class GlobalFieldListDict(TypedDict):
    global_fields: NotRequired[list[GlobalFieldDict]]
