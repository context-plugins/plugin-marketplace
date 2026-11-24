from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClassItem(SdkBaseModel):
    """An item of the class."""

    value: Optional[str] = UNSET
    """The class item's value."""


class ClassItemDict(TypedDict):
    value: NotRequired[str]
