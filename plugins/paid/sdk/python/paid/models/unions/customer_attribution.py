from __future__ import annotations

from typing import TypeAlias

from ..customer_by_external_id import CustomerByExternalId, CustomerByExternalIdDict
from ..customer_by_id import CustomerById, CustomerByIdDict

CustomerAttribution: TypeAlias = CustomerById | CustomerByExternalId

CustomerAttributionDict: TypeAlias = CustomerByIdDict | CustomerByExternalIdDict
