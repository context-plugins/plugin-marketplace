from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsBeneficiariesResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsBeneficiariesResponseDict(TypedDict):
    krs: NotRequired[str]
