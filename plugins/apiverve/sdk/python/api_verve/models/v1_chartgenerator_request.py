from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ChartgeneratorRequest(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Chart type"""

    labels: str
    """Array of labels for the x-axis or chart segments"""

    datasets: str
    """Array of datasets with 'name' and 'values'"""

    title: Optional[str] = UNSET
    """Optional title displayed on the chart"""

    width: Optional[int] = UNSET
    """Image width in pixels"""

    height: Optional[int] = UNSET
    """Image height in pixels"""

    format: Optional[str] = UNSET
    """Output format"""


class V1ChartgeneratorRequestDict(TypedDict):
    type_: NotRequired[str]
    labels: str
    datasets: str
    title: NotRequired[str]
    width: NotRequired[int]
    height: NotRequired[int]
    format: NotRequired[str]
