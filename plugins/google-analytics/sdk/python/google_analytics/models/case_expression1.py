from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CaseExpression1(SdkBaseModel):
    """Used to convert a dimension value to upper case."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """Name of a dimension. The name must refer back to a name in dimensions field of the request."""


class CaseExpression1Dict(TypedDict):
    dimension_name: NotRequired[str]
