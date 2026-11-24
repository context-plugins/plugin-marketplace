from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class Group(SdkBaseModel):
    concept: Optional[str] = UNSET
    """The canonical measure that disagrees"""

    basis: Optional[str] = UNSET
    """Whether the measure is as-reported or an adjusted/alternative one"""

    role: Optional[str] = UNSET
    """Whether the figure is an outcome, forecast, or comparative"""

    period: Optional[str] = UNSET
    """The reporting period the figure covers"""

    currency: Optional[str] = UNSET
    """ISO currency of the figures"""

    labels: Optional[list[str]] = UNSET
    """The source's own wording(s) for the measure"""

    min: Optional[float] = UNSET
    """Smallest reported value (absolute base units)"""

    max: Optional[float] = UNSET
    """Largest reported value (absolute base units)"""

    values: Optional[list[Value]] = UNSET
    """The reported figure per member article."""


class GroupDict(TypedDict):
    concept: NotRequired[str]
    basis: NotRequired[str]
    role: NotRequired[str]
    period: NotRequired[str]
    currency: NotRequired[str]
    labels: NotRequired[list[str]]
    min: NotRequired[float]
    max: NotRequired[float]
    values: NotRequired[list[ValueDict]]
