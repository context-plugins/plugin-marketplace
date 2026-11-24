from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class DataPoint(SdkBaseModel):
    date: RFC3339DateTime
    """Date of this data point"""

    values: Any
    """Mapping of variation (variation1, variation2 etc.) to result value in that variation"""


class DataPointDict(TypedDict):
    date: RFC3339DateTime
    values: Any
