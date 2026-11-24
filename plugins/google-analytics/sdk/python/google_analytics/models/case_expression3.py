from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CaseExpression3(SdkBaseModel):
    """Used to convert a dimension value to lower case."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """Name of a dimension. The name must refer back to a name in dimensions field of the request."""


class CaseExpression3Dict(TypedDict):
    dimension_name: NotRequired[str]
