from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .options import Options, OptionsDict


class VersionsImportRequest(SdkBaseModel):
    options: Optional[Options] = UNSET
    spec_data: Optional[str] = Field(default=UNSET, alias="specData")
    url: Optional[str] = UNSET


class VersionsImportRequestDict(TypedDict):
    options: NotRequired[OptionsDict]
    spec_data: NotRequired[str]
    url: NotRequired[str]
