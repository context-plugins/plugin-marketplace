from __future__ import annotations

from typing import TypeAlias

from ..google_monitor_request import GoogleMonitorRequest, GoogleMonitorRequestDict
from ..google_monitor_request1 import GoogleMonitorRequest1, GoogleMonitorRequest1Dict
from ..google_monitor_request2 import GoogleMonitorRequest2, GoogleMonitorRequest2Dict

GoogleMonitorRequest3: TypeAlias = GoogleMonitorRequest | GoogleMonitorRequest1 | GoogleMonitorRequest2

GoogleMonitorRequest3Dict: TypeAlias = GoogleMonitorRequestDict | GoogleMonitorRequest1Dict | GoogleMonitorRequest2Dict
