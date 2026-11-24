from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyErrorResponse(SdkBaseModel):
    message: str


class CompanyErrorResponseDict(TypedDict):
    message: str
