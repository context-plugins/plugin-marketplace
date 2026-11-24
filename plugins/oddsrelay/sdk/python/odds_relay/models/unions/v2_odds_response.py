from __future__ import annotations

from typing import TypeAlias

from ..matched_envelope import MatchedEnvelope, MatchedEnvelopeDict
from ..matched_event import MatchedEvent, MatchedEventDict
from ..quote import Quote, QuoteDict

V2OddsResponse: TypeAlias = MatchedEnvelope | list[MatchedEvent] | Quote

V2OddsResponseDict: TypeAlias = MatchedEnvelopeDict | list[MatchedEventDict] | QuoteDict
