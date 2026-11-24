from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_exception_update import CategoryExceptionUpdate, CategoryExceptionUpdateDict


class Data2FlightdeckDopeSecurityPublicApiSpecification(SdkBaseModel):
    categories: Optional[dict[str, CategoryExceptionUpdate]] = UNSET
    """Exception updates keyed first by category name, then by user or group identifier."""

    custom_categories: Optional[dict[str, CategoryExceptionUpdate]] = Field(default=UNSET, alias="customCategories")
    """Exception updates keyed first by custom category name, then by user or group identifier."""


class Data2FlightdeckDopeSecurityPublicApiSpecificationDict(TypedDict):
    categories: NotRequired[dict[str, CategoryExceptionUpdateDict]]
    custom_categories: NotRequired[dict[str, CategoryExceptionUpdateDict]]
