from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter_expression3 import FilterExpression3, FilterExpression3Dict


class Comparison(SdkBaseModel):
    """Defines an individual comparison. Most requests will include multiple comparisons so that the report compares
    between the comparisons."""

    dimension_filter: Optional[FilterExpression3] = Field(default=UNSET, alias="dimensionFilter")
    """A basic comparison."""

    comparison: Optional[str] = UNSET
    """A saved comparison identified by the comparison's resource name. For example, 'comparisons/1234'."""

    name: Optional[str] = UNSET
    """Each comparison produces separate rows in the response. In the response, this comparison is identified by this
    name. If name is unspecified, we will use the saved comparisons display name."""


class ComparisonDict(TypedDict):
    dimension_filter: NotRequired[FilterExpression3Dict]
    comparison: NotRequired[str]
    name: NotRequired[str]
