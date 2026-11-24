from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_company_input import IntentCompanyInput, IntentCompanyInputDict


class Datum(SdkBaseModel):
    company: Optional[IntentCompanyInput] = UNSET
    external_id: Optional[str] = UNSET


class DatumDict(TypedDict):
    company: NotRequired[IntentCompanyInputDict]
    external_id: NotRequired[str]
