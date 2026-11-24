from __future__ import annotations

from typing import TypeAlias

from ..ai_mode_monitor_request import AiModeMonitorRequest, AiModeMonitorRequestDict
from ..ai_mode_monitor_request1 import AiModeMonitorRequest1, AiModeMonitorRequest1Dict

AiModeMonitorRequest2: TypeAlias = AiModeMonitorRequest | AiModeMonitorRequest1

AiModeMonitorRequest2Dict: TypeAlias = AiModeMonitorRequestDict | AiModeMonitorRequest1Dict
