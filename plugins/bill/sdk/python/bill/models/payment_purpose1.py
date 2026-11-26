from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code1 import Code1, Code1Dict


class PaymentPurpose1(SdkBaseModel):
    text: Optional[str] = UNSET
    """Payment purpose text"""

    code: Optional[Code1] = UNSET


class PaymentPurpose1Dict(TypedDict):
    text: NotRequired[str]
    code: NotRequired[Code1Dict]
