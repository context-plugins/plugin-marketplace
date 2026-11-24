from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .i_product_result import IProductResult, IProductResultDict


class ISimpleListResultOfIProductResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    list_: OptionalNullable[list[IProductResult]] = Field(default=UNSET, alias="list")


class ISimpleListResultOfIProductResultDict(TypedDict):
    list_: NotRequired[list[IProductResultDict] | None]
