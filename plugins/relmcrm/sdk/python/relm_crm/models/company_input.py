from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyInput(SdkBaseModel):
    name: str
    domain: Optional[str] = UNSET
    custom_fields: Optional[Any] = UNSET


class CompanyInputDict(TypedDict):
    name: str
    domain: NotRequired[str]
    custom_fields: NotRequired[Any]
