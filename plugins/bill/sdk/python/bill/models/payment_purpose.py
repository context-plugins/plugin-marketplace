from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code import Code, CodeDict


class PaymentPurpose(SdkBaseModel):
    text: Optional[str] = UNSET
    """Payment purpose text. This can be any user-defined text. If you set ``text``, do not set ``code``."""

    code: Optional[Code] = UNSET


class PaymentPurposeDict(TypedDict):
    text: NotRequired[str]
    code: NotRequired[CodeDict]
