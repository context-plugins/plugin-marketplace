from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobTitle(SdkBaseModel):
    title: Optional[str] = UNSET
    departments: Optional[list[str]] = UNSET
    seniority: Optional[str] = UNSET


class JobTitleDict(TypedDict):
    title: NotRequired[str]
    departments: NotRequired[list[str]]
    seniority: NotRequired[str]
