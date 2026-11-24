from __future__ import annotations

from typing import TypeAlias

from ..reports_response1 import ReportsResponse1, ReportsResponse1Dict
from ..reports_response11 import ReportsResponse11, ReportsResponse11Dict

ReportsResponse12: TypeAlias = ReportsResponse1 | ReportsResponse11

ReportsResponse12Dict: TypeAlias = ReportsResponse1Dict | ReportsResponse11Dict
