from __future__ import annotations

from typing import TypeAlias

from ..google_monitor_request3_model import GoogleMonitorRequest3Model, GoogleMonitorRequest3ModelDict
from ..google_monitor_request31 import GoogleMonitorRequest31, GoogleMonitorRequest31Dict
from ..google_monitor_request32 import GoogleMonitorRequest32, GoogleMonitorRequest32Dict

GoogleMonitorRequest21: TypeAlias = GoogleMonitorRequest3Model | GoogleMonitorRequest31 | GoogleMonitorRequest32

GoogleMonitorRequest21Dict: TypeAlias = (
    GoogleMonitorRequest3ModelDict | GoogleMonitorRequest31Dict | GoogleMonitorRequest32Dict
)
