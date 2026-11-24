from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Requirement(SdkBaseModel):
    field_reference: Optional[str] = UNSET
    resolution_url: Optional[str] = UNSET
    status: Optional[str] = UNSET
    reason_code: Optional[str] = UNSET


class RequirementDict(TypedDict):
    field_reference: NotRequired[str]
    resolution_url: NotRequired[str]
    status: NotRequired[str]
    reason_code: NotRequired[str]
