from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyFilter(SdkBaseModel):
    name: Optional[str] = UNSET
    industry: Optional[str] = UNSET
    size: Optional[str] = UNSET
    country: Optional[str] = UNSET
    region: Optional[str] = UNSET
    founded_from: Optional[int] = UNSET
    founded_to: Optional[int] = UNSET
    employees_count_from: Optional[int] = UNSET
    employees_count_to: Optional[int] = UNSET
    technologies: Optional[list[str]] = UNSET


class CompanyFilterDict(TypedDict):
    name: NotRequired[str]
    industry: NotRequired[str]
    size: NotRequired[str]
    country: NotRequired[str]
    region: NotRequired[str]
    founded_from: NotRequired[int]
    founded_to: NotRequired[int]
    employees_count_from: NotRequired[int]
    employees_count_to: NotRequired[int]
    technologies: NotRequired[list[str]]
