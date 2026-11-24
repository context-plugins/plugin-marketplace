from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceInformation(SdkBaseModel):
    addresses: Optional[list[str]] = UNSET
    name: Optional[str] = UNSET


class ResourceInformationDict(TypedDict):
    addresses: NotRequired[list[str]]
    name: NotRequired[str]
