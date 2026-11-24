from __future__ import annotations

from typing import TypeAlias

from ..enums.run_cond import RunCondOrStr

RunCond1: TypeAlias = RunCondOrStr | list[RunCondOrStr]

RunCond1Dict: TypeAlias = RunCondOrStr | list[RunCondOrStr]
