from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Company1(SdkBaseModel):
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    name: OptionalNullable[str] = UNSET
    domain: OptionalNullable[str] = UNSET


class Company1Dict(TypedDict):
    company_id: NotRequired[str]
    name: NotRequired[str | None]
    domain: NotRequired[str | None]
