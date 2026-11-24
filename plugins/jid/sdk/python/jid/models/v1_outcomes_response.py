from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1OutcomesResponse(SdkBaseModel):
    result_id: Optional[str] = UNSET
    outcome: Optional[str] = UNSET
    recorded_at: Optional[str] = UNSET


class V1OutcomesResponseDict(TypedDict):
    result_id: NotRequired[str]
    outcome: NotRequired[str]
    recorded_at: NotRequired[str]
