from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .next import Next, NextDict


class FrequencyReportingReportsApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Frequency type"""

    amount: Optional[str] = UNSET
    """Frequency amount"""

    display: Optional[str] = UNSET
    """Display name of the frequency"""

    next: Optional[Next] = UNSET


class FrequencyReportingReportsApiDict(TypedDict):
    type_: NotRequired[str]
    amount: NotRequired[str]
    display: NotRequired[str]
    next: NotRequired[NextDict]
