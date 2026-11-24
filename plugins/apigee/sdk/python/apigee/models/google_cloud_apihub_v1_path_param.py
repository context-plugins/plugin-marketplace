from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type import DataTypeOrStr


class GoogleCloudApihubV1PathParam(SdkBaseModel):
    """HTTP Path parameter."""

    data_type: Optional[DataTypeOrStr] = Field(default=UNSET, alias="dataType")
    """Optional. Data type of path param"""

    position: Optional[int] = UNSET
    """Optional. Segment location in the path, 1-indexed"""


class GoogleCloudApihubV1PathParamDict(TypedDict):
    data_type: NotRequired[DataTypeOrStr]
    position: NotRequired[int]
