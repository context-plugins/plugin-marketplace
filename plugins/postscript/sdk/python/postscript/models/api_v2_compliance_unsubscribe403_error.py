from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ApiV2ComplianceUnsubscribe403Error(SdkBaseModel):
    errors: Optional[list[Error]] = UNSET


class ApiV2ComplianceUnsubscribe403ErrorDict(TypedDict):
    errors: NotRequired[list[ErrorDict]]
