from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action import ActionOrStr
from .enums.data_type4 import DataType4OrStr


class GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest(SdkBaseModel):
    """The ManagePluginInstanceSourceData method's request."""

    relative_path: Optional[str] = Field(default=UNSET, alias="relativePath")
    """Required. Relative path of data being managed for a given plugin instance."""

    data_type: Optional[DataType4OrStr] = Field(default=UNSET, alias="dataType")
    """Required. Type of data to be managed."""

    data: Optional[str] = UNSET
    """Required. Data to be managed."""

    action: Optional[ActionOrStr] = UNSET
    """Required. Action to be performed."""


class GoogleCloudApihubV1ManagePluginInstanceSourceDataRequestDict(TypedDict):
    relative_path: NotRequired[str]
    data_type: NotRequired[DataType4OrStr]
    data: NotRequired[str]
    action: NotRequired[ActionOrStr]
