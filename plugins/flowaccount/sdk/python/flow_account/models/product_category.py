from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ProductCategory(SdkBaseModel):
    id: Optional[int] = UNSET
    name: OptionalNullable[str] = UNSET
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    is_share: Optional[bool] = Field(default=UNSET, alias="isShare")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")


class ProductCategoryDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str | None]
    is_delete: NotRequired[bool]
    is_share: NotRequired[bool]
    reset_transaction_id: NotRequired[int | None]
