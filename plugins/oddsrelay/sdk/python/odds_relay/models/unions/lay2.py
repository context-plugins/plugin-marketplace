from __future__ import annotations

from typing import TypeAlias

from ..lay import Lay, LayDict
from ..lay1 import Lay1, Lay1Dict

Lay2: TypeAlias = list[Lay] | Lay1
"""Lowest price first. An array of exchange offers; on ``each-way`` and ``extra-place`` an object ``{win, place}`` of
two such arrays; absent on ``dutching``."""

Lay2Dict: TypeAlias = list[LayDict] | Lay1Dict
