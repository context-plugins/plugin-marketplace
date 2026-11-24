from __future__ import annotations

from typing import TypeAlias

from ..weight import Weight, WeightDict
from ..weight1 import Weight1, Weight1Dict

Weight2: TypeAlias = Weight | Weight1

Weight2Dict: TypeAlias = WeightDict | Weight1Dict
