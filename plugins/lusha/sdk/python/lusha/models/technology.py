from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Technology(SdkBaseModel):
    name: Optional[str] = UNSET


class TechnologyDict(TypedDict):
    name: NotRequired[str]
