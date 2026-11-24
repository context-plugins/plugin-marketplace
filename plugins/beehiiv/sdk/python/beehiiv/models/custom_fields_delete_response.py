from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFieldsDeleteResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class CustomFieldsDeleteResponseDict(TypedDict):
    message: NotRequired[str]
