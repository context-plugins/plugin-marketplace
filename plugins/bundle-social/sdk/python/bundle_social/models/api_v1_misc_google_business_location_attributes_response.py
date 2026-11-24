from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attribute import Attribute, AttributeDict


class ApiV1MiscGoogleBusinessLocationAttributesResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    attributes: Optional[list[Attribute]] = UNSET


class ApiV1MiscGoogleBusinessLocationAttributesResponseDict(TypedDict):
    name: NotRequired[str]
    attributes: NotRequired[list[AttributeDict]]
