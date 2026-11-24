from __future__ import annotations

from typing import TypeAlias

from ..v1_poshmark_sold_response1 import V1PoshmarkSoldResponse1, V1PoshmarkSoldResponse1Dict
from ..v1_poshmark_sold_response11 import V1PoshmarkSoldResponse11, V1PoshmarkSoldResponse11Dict

V1PoshmarkSoldResponse12: TypeAlias = V1PoshmarkSoldResponse1 | V1PoshmarkSoldResponse11

V1PoshmarkSoldResponse12Dict: TypeAlias = V1PoshmarkSoldResponse1Dict | V1PoshmarkSoldResponse11Dict
