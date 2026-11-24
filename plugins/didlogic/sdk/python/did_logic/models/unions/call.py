from __future__ import annotations

from typing import TypeAlias

from ..incoming_cdr import IncomingCdr, IncomingCdrDict
from ..sip_cdr import SipCdr, SipCdrDict
from ..web_cdr import WebCdr, WebCdrDict

Call: TypeAlias = SipCdr | IncomingCdr | WebCdr

CallDict: TypeAlias = SipCdrDict | IncomingCdrDict | WebCdrDict
