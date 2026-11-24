from __future__ import annotations

from typing import TypeAlias

from ..enums.parallel_beta import ParallelBetaOrStr

ParallelBeta1Model: TypeAlias = ParallelBetaOrStr | str
"""Model for the parallel-beta header."""

ParallelBeta1ModelDict: TypeAlias = ParallelBetaOrStr | str
