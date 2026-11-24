from __future__ import annotations

from typing import TypeAlias

from ..quote import Quote, QuoteDict
from ..raw_event import RawEvent, RawEventDict

V2OddsEventResponse: TypeAlias = RawEvent | Quote

V2OddsEventResponseDict: TypeAlias = RawEventDict | QuoteDict
