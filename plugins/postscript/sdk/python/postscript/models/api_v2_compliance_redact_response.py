from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2ComplianceRedactResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiV2ComplianceRedactResponseDict(TypedDict):
    message: NotRequired[str]
