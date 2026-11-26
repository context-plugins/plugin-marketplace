from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomationCompanyUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")


class AutomationCompanyUpdateDict(TypedDict):
    name: NotRequired[str]
    display_name: NotRequired[str]
