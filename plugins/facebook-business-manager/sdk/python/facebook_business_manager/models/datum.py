from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class Datum(SdkBaseModel):
    name: Optional[str] = UNSET
    """The metric name"""

    period: Optional[str] = UNSET
    """The aggregation period"""

    values: Optional[list[Value]] = UNSET
    title: Optional[str] = UNSET
    """Human-readable metric title"""

    description: Optional[str] = UNSET
    """Description of what the metric measures"""

    id: Optional[str] = UNSET
    """Metric identifier"""


class DatumDict(TypedDict):
    name: NotRequired[str]
    period: NotRequired[str]
    values: NotRequired[list[ValueDict]]
    title: NotRequired[str]
    description: NotRequired[str]
    id: NotRequired[str]
