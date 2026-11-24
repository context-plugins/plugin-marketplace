from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsWasteRegistryResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsWasteRegistryResponseDict(TypedDict):
    krs: NotRequired[str]
