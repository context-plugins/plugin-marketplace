from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgreementSlimDto(SdkBaseModel):
    cloud_url: Optional[str] = Field(default=UNSET, alias="cloudUrl")
    name: Optional[str] = UNSET


class AgreementSlimDtoDict(TypedDict):
    cloud_url: NotRequired[str]
    name: NotRequired[str]
