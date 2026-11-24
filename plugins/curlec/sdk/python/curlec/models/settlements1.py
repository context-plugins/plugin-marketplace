from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Settlements1(SdkBaseModel):
    account_number: Optional[str] = UNSET
    ifsc_code: Optional[str] = UNSET
    beneficiary_name: Optional[str] = UNSET


class Settlements1Dict(TypedDict):
    account_number: NotRequired[str]
    ifsc_code: NotRequired[str]
    beneficiary_name: NotRequired[str]
