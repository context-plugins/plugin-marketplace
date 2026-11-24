from __future__ import annotations

from typing import TypeAlias

from ..product_by_external_id import ProductByExternalId, ProductByExternalIdDict
from ..product_by_id import ProductById, ProductByIdDict

ProductAttribution: TypeAlias = ProductById | ProductByExternalId

ProductAttributionDict: TypeAlias = ProductByIdDict | ProductByExternalIdDict
