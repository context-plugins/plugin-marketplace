from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DepartmentSize(SdkBaseModel):
    hr: Optional[float] = UNSET
    sales: Optional[float] = UNSET
    mgmt: Optional[float] = UNSET
    product_mgmt: Optional[float] = UNSET
    it: Optional[float] = UNSET
    administration: Optional[float] = UNSET
    marketing: Optional[float] = UNSET
    operations: Optional[float] = UNSET
    rnd: Optional[float] = UNSET
    business_dev: Optional[float] = UNSET
    finance: Optional[float] = UNSET


class DepartmentSizeDict(TypedDict):
    hr: NotRequired[float]
    sales: NotRequired[float]
    mgmt: NotRequired[float]
    product_mgmt: NotRequired[float]
    it: NotRequired[float]
    administration: NotRequired[float]
    marketing: NotRequired[float]
    operations: NotRequired[float]
    rnd: NotRequired[float]
    business_dev: NotRequired[float]
    finance: NotRequired[float]
