from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type2 import DataType2OrStr


class GoogleCloudApihubV1Header(SdkBaseModel):
    """An aggregation of HTTP header occurrences."""

    data_type: Optional[DataType2OrStr] = Field(default=UNSET, alias="dataType")
    """Data type of header"""

    count: Optional[str] = UNSET
    """The number of occurrences of this Header across transactions."""

    name: Optional[str] = UNSET
    """Header name."""


class GoogleCloudApihubV1HeaderDict(TypedDict):
    data_type: NotRequired[DataType2OrStr]
    count: NotRequired[str]
    name: NotRequired[str]
