from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsRequest1(SdkBaseModel):
    title: Optional[str] = UNSET
    slug: Optional[str] = UNSET


class ApiV1ReportsRequest1Dict(TypedDict):
    title: NotRequired[str]
    slug: NotRequired[str]
