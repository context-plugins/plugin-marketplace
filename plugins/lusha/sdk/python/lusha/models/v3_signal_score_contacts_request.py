from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .v3_signal_score_contact_item import V3SignalScoreContactItem, V3SignalScoreContactItemDict


class V3SignalScoreContactsRequest(SdkBaseModel):
    contacts: list[V3SignalScoreContactItem]


class V3SignalScoreContactsRequestDict(TypedDict):
    contacts: list[V3SignalScoreContactItemDict]
