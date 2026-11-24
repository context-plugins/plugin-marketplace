from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_info import CustomFieldInfo, CustomFieldInfoDict


class CustomFieldsPatchResponse(SdkBaseModel):
    data: Optional[CustomFieldInfo] = UNSET


class CustomFieldsPatchResponseDict(TypedDict):
    data: NotRequired[CustomFieldInfoDict]
