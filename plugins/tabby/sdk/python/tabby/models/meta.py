from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Meta(SdkBaseModel):
    """Merchant-defined data about the payment. This field is a key-value map. The example properties provided below."""

    customer: OptionalNullable[str] = UNSET
    order_id: OptionalNullable[str] = UNSET


class MetaDict(TypedDict):
    customer: NotRequired[str | None]
    order_id: NotRequired[str | None]
