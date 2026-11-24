from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Profile1(SdkBaseModel):
    category: Optional[str] = UNSET
    subcategory: Optional[str] = UNSET
    addresses: Optional[Any] = UNSET


class Profile1Dict(TypedDict):
    category: NotRequired[str]
    subcategory: NotRequired[str]
    addresses: NotRequired[Any]
