from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class JobTitle1(SdkBaseModel):
    title: OptionalNullable[str] = UNSET
    departments: Optional[list[str]] = UNSET
    seniority: OptionalNullable[str] = UNSET


class JobTitle1Dict(TypedDict):
    title: NotRequired[str | None]
    departments: NotRequired[list[str]]
    seniority: NotRequired[str | None]
