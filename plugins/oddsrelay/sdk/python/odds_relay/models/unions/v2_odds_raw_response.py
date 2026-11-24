from __future__ import annotations

from typing import TypeAlias

from ..quote import Quote, QuoteDict
from ..raw_envelope import RawEnvelope, RawEnvelopeDict
from ..raw_event import RawEvent, RawEventDict

V2OddsRawResponse: TypeAlias = RawEnvelope | list[RawEvent] | Quote

V2OddsRawResponseDict: TypeAlias = RawEnvelopeDict | list[RawEventDict] | QuoteDict
