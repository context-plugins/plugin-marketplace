from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Person1(SdkBaseModel):
    contact_id: Optional[str] = UNSET


class Person1Dict(TypedDict):
    contact_id: NotRequired[str]
