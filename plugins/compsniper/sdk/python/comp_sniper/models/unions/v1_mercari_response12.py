from __future__ import annotations

from typing import TypeAlias

from ..v1_mercari_response1 import V1MercariResponse1, V1MercariResponse1Dict
from ..v1_mercari_response11 import V1MercariResponse11, V1MercariResponse11Dict

V1MercariResponse12: TypeAlias = V1MercariResponse1 | V1MercariResponse11

V1MercariResponse12Dict: TypeAlias = V1MercariResponse1Dict | V1MercariResponse11Dict
