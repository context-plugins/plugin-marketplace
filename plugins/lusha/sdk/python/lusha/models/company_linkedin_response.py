from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyLinkedinResponse(SdkBaseModel):
    url: str


class CompanyLinkedinResponseDict(TypedDict):
    url: str
