from __future__ import annotations

from typing import TypeAlias

from ..coverage_keyed import CoverageKeyed, CoverageKeyedDict
from ..coverage_summary import CoverageSummary, CoverageSummaryDict

V2CoverageResponse: TypeAlias = CoverageSummary | CoverageKeyed

V2CoverageResponseDict: TypeAlias = CoverageSummaryDict | CoverageKeyedDict
