from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsCustomFieldsRequest1(SdkBaseModel):
    display: Optional[str] = UNSET


class PublicationsCustomFieldsRequest1Dict(TypedDict):
    display: NotRequired[str]
