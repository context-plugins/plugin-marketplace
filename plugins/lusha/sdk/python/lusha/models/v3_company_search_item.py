from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3CompanySearchItem(SdkBaseModel):
    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET


class V3CompanySearchItemDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
