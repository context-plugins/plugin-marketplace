from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Customer(SdkBaseModel):
    contact: Optional[str] = UNSET
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    customer_id: Optional[str] = UNSET
    addresses: Optional[list[Any]] = UNSET


class CustomerDict(TypedDict):
    contact: NotRequired[str]
    name: NotRequired[str]
    email: NotRequired[str]
    customer_id: NotRequired[str]
    addresses: NotRequired[list[Any]]
