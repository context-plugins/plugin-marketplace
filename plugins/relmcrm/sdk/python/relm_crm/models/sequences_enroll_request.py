from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SequencesEnrollRequest(SdkBaseModel):
    contact_id: str
    source: Optional[Any] = UNSET


class SequencesEnrollRequestDict(TypedDict):
    contact_id: str
    source: NotRequired[Any]
