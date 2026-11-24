from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result1(SdkBaseModel):
    id: Optional[str] = UNSET
    company_change: Optional[list[Any]] = Field(default=UNSET, alias="companyChange")
    promotion: Optional[list[Any]] = UNSET


class Result1Dict(TypedDict):
    id: NotRequired[str]
    company_change: NotRequired[list[Any]]
    promotion: NotRequired[list[Any]]
