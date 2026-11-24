from __future__ import annotations

from typing import TypeAlias

from ..base_inheritance import BaseInheritance, BaseInheritanceDict
from ..custom_category_restriction_update import CustomCategoryRestrictionUpdate, CustomCategoryRestrictionUpdateDict

CustomCategories: TypeAlias = dict[str, CustomCategoryRestrictionUpdate] | BaseInheritance
"""Restriction updates keyed by custom category name, or BaseInheritance to reset to base."""

CustomCategoriesDict: TypeAlias = dict[str, CustomCategoryRestrictionUpdateDict] | BaseInheritanceDict
