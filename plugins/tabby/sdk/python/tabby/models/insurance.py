from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Insurance(SdkBaseModel):
    insurance_company: Optional[str] = UNSET
    insurance_type: Optional[str] = UNSET
    insurance_price: Optional[float] = UNSET


class InsuranceDict(TypedDict):
    insurance_company: NotRequired[str]
    insurance_type: NotRequired[str]
    insurance_price: NotRequired[float]
