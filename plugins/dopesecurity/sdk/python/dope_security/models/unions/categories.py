from __future__ import annotations

from typing import TypeAlias

from ..base_inheritance import BaseInheritance, BaseInheritanceDict
from ..category_restriction_update import CategoryRestrictionUpdate, CategoryRestrictionUpdateDict

Categories: TypeAlias = dict[str, CategoryRestrictionUpdate] | BaseInheritance
"""Restriction updates keyed by category name, or BaseInheritance to reset to base."""

CategoriesDict: TypeAlias = dict[str, CategoryRestrictionUpdateDict] | BaseInheritanceDict
