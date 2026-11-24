from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .i_simple_list_result_of_i_product_result import (
    ISimpleListResultOfIProductResult,
    ISimpleListResultOfIProductResultDict,
)


class ApiResponseOfISimpleListResultOfIProductResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Optional[bool] = UNSET
    message: OptionalNullable[str] = UNSET
    code: Optional[int] = UNSET
    data: Optional[ISimpleListResultOfIProductResult] = UNSET


class ApiResponseOfISimpleListResultOfIProductResultDict(TypedDict):
    status: NotRequired[bool]
    message: NotRequired[str | None]
    code: NotRequired[int]
    data: NotRequired[ISimpleListResultOfIProductResultDict]
