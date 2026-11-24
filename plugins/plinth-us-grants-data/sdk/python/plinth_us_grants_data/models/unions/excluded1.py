from __future__ import annotations

from typing import TypeAlias

from ..excluded_class import ExcludedClass, ExcludedClassDict

Excluded1: TypeAlias = ExcludedClass | bool

Excluded1Dict: TypeAlias = ExcludedClassDict | bool
