from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyTechnology(SdkBaseModel):
    name: str


class CompanyTechnologyDict(TypedDict):
    name: str
