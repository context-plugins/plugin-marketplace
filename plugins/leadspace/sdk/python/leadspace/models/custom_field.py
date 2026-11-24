from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomField(SdkBaseModel):
    name: Optional[str] = UNSET
    value: Optional[str] = UNSET


class CustomFieldDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
