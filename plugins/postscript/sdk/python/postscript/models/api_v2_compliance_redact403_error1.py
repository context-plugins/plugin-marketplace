from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ApiV2ComplianceRedact403Error1(SdkBaseModel):
    errors: Optional[list[Error]] = UNSET


class ApiV2ComplianceRedact403Error1Dict(TypedDict):
    errors: NotRequired[list[ErrorDict]]
