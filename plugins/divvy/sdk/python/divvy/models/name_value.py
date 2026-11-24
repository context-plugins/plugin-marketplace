from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NameValue(SdkBaseModel):
    """Class for name value pair."""

    name: Optional[str] = UNSET
    """Name field"""

    value: Optional[str] = UNSET
    """Value field"""


class NameValueDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
