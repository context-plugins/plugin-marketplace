from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConcatenateExpression(SdkBaseModel):
    """Used to combine dimension values to a single dimension."""

    delimiter: Optional[str] = UNSET
    """The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can
    be longer strings. If a dimension value contains the delimiter, both will be present in response with no
    distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the
    response will contain "US,FR,JP"."""

    dimension_names: Optional[list[str]] = Field(default=UNSET, alias="dimensionNames")
    """Names of dimensions. The names must refer back to names in the dimensions field of the request."""


class ConcatenateExpressionDict(TypedDict):
    delimiter: NotRequired[str]
    dimension_names: NotRequired[list[str]]
