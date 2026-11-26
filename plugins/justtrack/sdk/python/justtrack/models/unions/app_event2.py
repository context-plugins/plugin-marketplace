from __future__ import annotations

from typing import TypeAlias

from ..app_event import AppEvent, AppEventDict
from ..app_event1 import AppEvent1, AppEvent1Dict

AppEvent2: TypeAlias = AppEvent | AppEvent1

AppEvent2Dict: TypeAlias = AppEventDict | AppEvent1Dict
